import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepositories {
    findByName(name: string): Promise<Specification | undefined>;
    create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationRepositories, ICreateSpecificationDTO };
