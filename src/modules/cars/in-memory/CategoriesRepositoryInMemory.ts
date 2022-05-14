import { Category } from '@modules/cars/entities/Category';
import {
    ICategoryRepositories,
    ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoryRepositories';

class CategoriesRepositoryInMemory implements ICategoryRepositories {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name
        ) as Category;

        return category;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }

    async list(): Promise<Category[]> {
        const { categories } = this;

        return categories;
    }
}

export { CategoriesRepositoryInMemory };
