import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationsRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create Car Specification', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory();
        specificationRepositoryInMemory =
            new SpecificationsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carRepositoryInMemory,
            specificationRepositoryInMemory
        );
    });

    it('should not be able to add a new specification to a non existent car', async () => {
        expect(async () => {
            const car_id = '1234';
            const specifications_id = ['54321'];

            await createCarSpecificationUseCase.execute({
                car_id,
                specifications_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to add a new specification to the car', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'Car Name 1',
            description: 'Car Description 1',
            daily_rate: 99.99,
            license_plate: 'TEST-002',
            fine_amount: 109,
            brand: 'Brand Name',
            category_id: 'UUIDFAKE',
        });

        const specification = await specificationRepositoryInMemory.create({
            name: 'chevrolet',
            description: 'chevrolet description',
        });

        const specifications_id = [specification.id];

        const specificationsCars = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_id,
        });

        expect(specificationsCars).toHaveProperty('specifications');
        expect(specificationsCars.specifications.length).toBe(1);
    });
});
