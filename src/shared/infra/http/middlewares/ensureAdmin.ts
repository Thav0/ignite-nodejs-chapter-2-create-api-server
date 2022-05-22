import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/accounts/infra/repositories/implementations/UserRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user.is_admin) {
        throw new AppError("You don't have permissions");
    }

    return next();
}
