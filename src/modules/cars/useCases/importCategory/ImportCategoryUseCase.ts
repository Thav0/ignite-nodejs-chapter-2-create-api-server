import { parse as csvParse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoryRepositories } from '../../repositories/ICategoryRepositories';

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoryRepositories
    ) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            // responsável por pegar o chunk
            // e passar para dentro do parseFile
            stream.pipe(parseFile);
            parseFile
                .on('data', async (line) => {
                    const [name, description] = line;

                    categories.push({ name, description });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on('error', (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        try {
            const categories = await this.loadCategories(file);
            categories.map(async (category) => {
                const { name, description } = category;

                const existCategory =
                    await this.categoriesRepository.findByName(name);

                if (!existCategory) {
                    await this.categoriesRepository.create({
                        name,
                        description,
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export { ImportCategoryUseCase };
