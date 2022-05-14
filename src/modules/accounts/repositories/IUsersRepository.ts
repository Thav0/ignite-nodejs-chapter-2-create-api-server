import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<void>;
    // list(): Promise<User[]>;
}

export { IUsersRepository };
