import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carRepositoryInMemory
        );
    });

    it('should be able to list all available cars', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'Car-1',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'AP5-C28',
            fine_amount: 109,
            brand: 'Car_Brand',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by brand', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'Car-2',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'AP5-C28',
            fine_amount: 109,
            brand: 'Car_Brand_Test',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: 'Car_Brand_Test',
        });

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by name', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'Car-3',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'AP5-C28',
            fine_amount: 109,
            brand: 'Car_Brand_Test',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: 'Car-3',
        });

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by category', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'Car-3',
            description: 'Car Description',
            daily_rate: 99.99,
            license_plate: 'AP5-C28',
            fine_amount: 109,
            brand: 'Car_Brand_Test',
            category_id: 'categoryuuid',
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: 'categoryuuid',
        });

        expect(cars).toEqual([car]);
    });
});
