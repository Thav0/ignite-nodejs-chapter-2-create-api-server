import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepositories {
    findByName(name: string): Specification | undefined;
    create({ name, description }: ICreateSpecificationDTO): void;
    list(): Specification[];
}

export { ISpecificationRepositories, ICreateSpecificationDTO };
