import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // verificar se existe
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw Error('Email or password incorrect!');
        }

        // senha correta
        const passwordMatch = compare(password, user.password);

        if (!passwordMatch) {
            throw Error('Email or password incorrect!');
        }

        // gerar token
        const token = sign({}, '698dc19d489c4e4db73e28a713eab07b', {
            subject: user.id,
            expiresIn: '1d',
        });

        return {
            user,
            token,
        };
    }
}

export { AuthenticateUserUseCase };
