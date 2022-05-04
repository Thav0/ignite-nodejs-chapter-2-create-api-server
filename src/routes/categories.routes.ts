import { Request, Response, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { uploadFileCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
    dest: './tmp',
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    (request: Request, response: Response) => {
        return uploadFileCategoryController().handle(request, response);
    }
);

export { categoriesRoutes };
