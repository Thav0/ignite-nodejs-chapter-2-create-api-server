import { Specification } from '../../model/Specification';
import { ISpecificationRepositories } from '../../repositories/ISpecificationRepositories';

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationRepositories) {}
    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
