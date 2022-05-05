import { inject, injectable } from 'tsyringe';

import { ICategoryRepositories } from '../../repositories/ICategoryRepositories';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoryRepositories
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('This category already exists');
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
