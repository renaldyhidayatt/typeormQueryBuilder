import { AppDataSource } from "../config/data-source";
import { Category } from "../database/entity/Categories";
import { ICategory } from "../interface/ICategory";


class CategoryRepository {
    protected repository = AppDataSource.getRepository(Category);

    public async findAll(): Promise<Category[]> {
        return await this.repository.find({
            relations: {
                products: true
            }
        })
    }

    public async find(id: any): Promise<Category> {
        return await this.repository.findOne({
            where: {
                id: id
            },
            relations: {
                products: true
            }
        })
    }

    public async create(category: ICategory): Promise<Category> {
        const _newCategory = new Category()

        _newCategory.name = category.name
        _newCategory.description = category.description

        return await _newCategory.save()

    }

    public async update(id: any, category: ICategory): Promise<Category> {
        const findId = await this.repository.findOne({
            where: {
                id: id
            }
        })
        findId.name = category.name;
        findId.description = category.description;

        return await findId.save()
    }

    public async deleteCategory(id: any): Promise<Category>{
        const findId = await this.repository.findOne({
            where: {
                id: id
            }
        })

        return await findId.remove()

    }
}

export default new CategoryRepository();