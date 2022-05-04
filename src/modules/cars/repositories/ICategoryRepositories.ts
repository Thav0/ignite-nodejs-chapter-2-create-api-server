import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepositories {
    findByName(name: string): Promise<Category>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
}

export { ICategoryRepositories, ICreateCategoryDTO };
