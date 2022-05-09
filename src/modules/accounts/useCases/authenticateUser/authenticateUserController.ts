import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './authenticateUserUseCase';

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        await authenticateUserUseCase.execute({
            password,
            email,
        });

        return response.status(201).send();
    }
}

export { AuthenticateUserController };
