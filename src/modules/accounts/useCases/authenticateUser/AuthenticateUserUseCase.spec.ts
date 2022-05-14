import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/createUserUseCase';
import { AppError } from '@shared/errors/AppError';

import { AuthenticateUserUseCase } from './authenticateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it('should be able to authenticate', async () => {
        const user: ICreateUserDTO = {
            driver_license: '99999',
            email: 'jon.doe@email.com',
            password: 'jon.doe.password',
            name: 'Jon Doe',
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty('token');
    });

    it('should not be able to authenticate without an account', async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: 'nonuser@email.com',
                password: 'defaultpassword',
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate with an incorrect password', async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: '99999',
                email: 'jon.doe@email.com',
                password: 'jon.doe.password',
                name: 'Jon Doe',
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: 'different_password',
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
