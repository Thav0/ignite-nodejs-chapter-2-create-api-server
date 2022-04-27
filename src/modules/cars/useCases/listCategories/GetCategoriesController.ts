import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './GetCategoriesUseCase';

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const categories = this.listCategoriesUseCase.execute();

        return response.json(categories);
    }
}

export { ListCategoriesController };
