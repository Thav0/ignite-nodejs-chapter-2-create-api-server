import { getRepository, Repository } from 'typeorm';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import {
    ICarsRepository,
    ICreateCarDTO,
} from '@modules/cars/repositories/ICarsRepository';

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        await this.repository.save(car);

        return car;
    }

    async findByLicensePlate(licensePlate: string): Promise<Car> {
        return (await this.repository.findOne({
            license_plate: licensePlate,
        })) as Car;
    }
}

export { CarsRepository };
