import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepositories {
    findByName(name: string): Category | undefined;
    create({ name, description }: ICreateCategoryDTO): void;
    list(): Category[];
}

export { ICategoryRepositories, ICreateCategoryDTO };
