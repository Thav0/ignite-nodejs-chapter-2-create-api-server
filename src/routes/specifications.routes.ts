import { Request, Response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

specificationsRoutes.get('/', (request: Request, response: Response) => {
    return response.status(200).json(specificationsRepository.list());
});

export { specificationsRoutes };
