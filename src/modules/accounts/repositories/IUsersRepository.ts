import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
    findByEmail(name: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<void>;
    // list(): Promise<User[]>;
}

export { IUsersRepository };
