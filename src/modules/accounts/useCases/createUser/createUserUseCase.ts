import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByName(email);

        if (userAlreadyExists) {
            throw new Error('This user already exists');
        }

        this.usersRepository.create({
            name,
            password,
            email,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
