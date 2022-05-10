import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token not found!');
    }

    // Bearer O34JN43OFO3K3
    // com o split [0] = Bearer [1] = O34JN43OFO3K3
    // [, token] desta forma pula o 1º index
    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            '698dc19d489c4e4db73e28a713eab07b'
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists', 401);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError('Invalid token!', 401);
    }
}
