import { Specification } from '../model/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationRepositories,
} from './ISpecificationRepositories';

class SpecificationRepository implements ISpecificationRepositories {
    private categories: Specification[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const category = new Specification();

        // Atribuir item por item ao category
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Specification[] {
        return this.categories;
    }

    findByName(name: string): Specification | undefined {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
}

export { SpecificationRepository };
