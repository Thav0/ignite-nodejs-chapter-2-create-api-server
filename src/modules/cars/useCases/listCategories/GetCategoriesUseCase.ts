import { Category } from '../../entities/Category';
import { ICategoryRepositories } from '../../repositories/ICategoryRepositories';

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepositories) {}
    execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
