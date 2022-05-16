import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Cars';

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<void>;
    // findByName(name: string): Promise<Car>;
    // list(): Promise<Car[]>;
}

export { ICarsRepository, ICreateCarDTO };
