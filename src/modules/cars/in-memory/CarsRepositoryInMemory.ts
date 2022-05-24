import { Car } from '../infra/typeorm/entities/Car';
import {
    ICarsRepository,
    ICreateCarDTO,
} from '../repositories/ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
        id,
    }: ICreateCarDTO): Promise<Car> {
        const newCar = new Car();

        Object.assign(newCar, {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
            id,
        });

        this.cars.push(newCar);

        return newCar;
    }

    async findByLicensePlate(licensePlate: string): Promise<Car> {
        return this.cars.find(
            (car) => car.license_plate === licensePlate
        ) as Car;
    }

    async findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Car[]> {
        let availableCars = this.cars.filter((car) => car.available);

        if (!name && !brand && !category_id) return availableCars;

        availableCars = availableCars.filter((car) => {
            if (car.name === name) return true;
            if (car.brand === brand) return true;
            if (car.category_id === category_id) return true;

            return false;
        });

        return availableCars;
    }

    async findById(id: string): Promise<Car | undefined> {
        return this.cars.find((car) => car.id === id);
    }
}

export { CarsRepositoryInMemory };
