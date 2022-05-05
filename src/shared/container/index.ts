import { container } from 'tsyringe';

import { ICategoryRepositories } from '../../modules/cars/repositories/ICategoryRepositories';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

// ICategoryRepository
container.registerSingleton<ICategoryRepositories>(
    'CategoriesRepository',
    CategoriesRepository
);
