import { Category } from '../../model/Category';
import {
    ICategoryRepositories,
    ICreateCategoryDTO,
} from '../ICategoryRepositories';

class CategoriesRepository implements ICategoryRepositories {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        // Atribuir item por item ao category
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
}

export { CategoriesRepository };
