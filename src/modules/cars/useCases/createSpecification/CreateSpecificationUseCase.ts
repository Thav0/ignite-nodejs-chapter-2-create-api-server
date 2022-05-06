import { inject, injectable } from 'tsyringe';

import { ISpecificationRepositories } from '../../repositories/ISpecificationRepositories';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject('SpecificationsRepository')
        private specificationsRepository: ISpecificationRepositories
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('This specification already exists');
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
