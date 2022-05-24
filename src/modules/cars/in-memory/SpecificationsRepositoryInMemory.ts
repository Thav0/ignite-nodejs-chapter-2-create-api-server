import { Specification } from '../infra/typeorm/entities/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationRepositories,
} from '../repositories/ISpecificationRepositories';

class SpecificationsRepositoryInMemory implements ISpecificationRepositories {
    specifications: Specification[] = [];

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);

        return specification;
    }

    async findByName(name: string): Promise<Specification | undefined> {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((specification) =>
            ids.includes(specification.id || '')
        );

        return allSpecifications;
    }
}

export { SpecificationsRepositoryInMemory };
