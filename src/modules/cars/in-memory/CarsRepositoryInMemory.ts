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
        });

        this.cars.push(newCar);

        return newCar;
    }

    async findByLicensePlate(licensePlate: string): Promise<Car> {
        return this.cars.find(
            (car) => car.license_plate === licensePlate
        ) as Car;
    }
}

export { CarsRepositoryInMemory };
