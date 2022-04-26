import { Specification } from '../model/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationRepositories,
} from './ISpecificationRepositories';

class SpecificationsRepository implements ISpecificationRepositories {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        // Atribuir item por item ao specification
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
