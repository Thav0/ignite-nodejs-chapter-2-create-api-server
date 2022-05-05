import { Request, Response, Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { uploadFileCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
    dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

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
