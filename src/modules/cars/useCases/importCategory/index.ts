import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export function uploadFileCategoryController() {
    const categoryRepository = new CategoriesRepository();

    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);

    const uploadFileCategoryController = new ImportCategoryController(
        importCategoryUseCase
    );

    return uploadFileCategoryController;
}
