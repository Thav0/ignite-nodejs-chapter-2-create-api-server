import { inject, injectable } from 'tsyringe';

import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationRepositories } from '../../repositories/ISpecificationRepositories';

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject('SpecificationsRepository')
        private specificationsRepository: ISpecificationRepositories
    ) {}
    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
