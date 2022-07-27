import { Product } from "../database/entity/Product"
import { IProductCreateOrUpdate } from "../interface/IProduct"

export interface ProductDao{
    findAll(): Promise<Product[]>
    find(id: any): Promise<Product>
    create(product: IProductCreateOrUpdate): Promise<Product>
    update(id: any, product: IProductCreateOrUpdate): Promise<Product>
    deleteProduct(id: any): Promise<Product>;
}