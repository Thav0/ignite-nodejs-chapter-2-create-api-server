import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/repositories/implementations/UserRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/implementations/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/implementations/SpecificationsRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoryRepositories } from '@modules/cars/repositories/ICategoryRepository';
import { ISpecificationRepositories } from '@modules/cars/repositories/ISpecificationRepositories';

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

// IUsersRepository
container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);

// ICarsRepository
container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
