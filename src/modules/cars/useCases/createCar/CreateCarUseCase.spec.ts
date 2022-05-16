import { CarsRepositoryInMemory } from '@modules/cars/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
    });

    it('should be able to create a new car', async () => {
        const car = await createCarUseCase.execute({
            name: 'Car Name',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'TEST-002',
            fine_amount: 109,
            brand: 'Brand Name',
            category_id: 'UUIDFAKE',
        });

        expect(car).toHaveProperty('id');
    });

    it('should not be able to create a new car with an license plate alreay in use', async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: 'Car Name 1',
                description: 'Car Description 1',
                daily_rate: 99.99,
                license_plate: 'TEST-002',
                fine_amount: 109,
                brand: 'Brand Name',
                category_id: 'UUIDFAKE',
            });

            await createCarUseCase.execute({
                name: 'Car Name 2',
                description: 'Car Description 2',
                daily_rate: 99.99,
                license_plate: 'TEST-002',
                fine_amount: 109,
                brand: 'Brand Name',
                category_id: 'UUIDFAKE',
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to create a new car with available true by default', async () => {
        const car = await createCarUseCase.execute({
            name: 'Car Available',
            description: 'Car Description 1',
            daily_rate: 99.99,
            license_plate: 'ABC-002',
            fine_amount: 109,
            brand: 'Brand Name',
            category_id: 'UUIDFAKE',
        });

        expect(car.available).toBe(true);
    });
});
