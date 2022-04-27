import { ISpecificationRepositories } from '../../repositories/ISpecificationRepositories';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepositories) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('This specification already exists');
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
