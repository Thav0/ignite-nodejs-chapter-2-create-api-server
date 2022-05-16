import { CarsRepositoryInMemory } from '@modules/cars/in-memory/CarsRepositoryInMemory';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
    });

    it('should be able to create a new car', async () => {
        await createCarUseCase.execute({
            name: 'Car Name',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'TEST-002',
            fine_amount: 109,
            brand: 'Brand Name',
            category_id: 'UUIDFAKE',
        });
    });
});
