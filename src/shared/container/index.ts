import { container } from 'tsyringe';

import { ICategoryRepositories } from '../../modules/cars/repositories/ICategoryRepositories';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationRepositories } from '../../modules/cars/repositories/ISpecificationRepositories';

// ICategoryRepository
container.registerSingleton<ICategoryRepositories>(
    'CategoriesRepository',
    CategoriesRepository
);

// ISpecificationRepositories
container.registerSingleton<ISpecificationRepositories>(
    'SpecificationsRepository',
    SpecificationsRepository
);
