import { Category } from "../database/entity/Categories"
import { ICategory } from "../interface/ICategory"


export interface CategoryDao{
    findAll(): Promise<Category[]>
    findId(id: any): Promise<Category>
    create(category: ICategory): Promise<Category>
    update(id: any, category: ICategory): Promise<Category>
    deleteCategory(id: any): Promise<Category>
}