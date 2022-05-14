import { Specification } from '@modules/cars/entities/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepositories {
    findByName(name: string): Promise<Specification>;
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
}

export { ISpecificationRepositories, ICreateSpecificationDTO };
