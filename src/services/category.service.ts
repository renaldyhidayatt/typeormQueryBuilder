import { CategoryDao } from "../dao/category.dao";
import { Category } from "../database/entity/Categories";
import { ICategory } from "../interface/ICategory";
import CategoryRepository from "../repository/category.repository";


class CategoryService implements CategoryDao{
    public categoryRepository = CategoryRepository;
    
    public findAll(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }

    public findId(id: any): Promise<Category> {
        return this.categoryRepository.find(id)
    }

    public create(category: ICategory): Promise<Category> {
        return this.categoryRepository.create(category)
    }

    public update(id: any, category: ICategory): Promise<Category> {
        return this.categoryRepository.update(id, category)
    }

    public deleteCategory(id: any): Promise<Category> {
        return this.categoryRepository.deleteCategory(id)
    }
    
}

export default new CategoryService();