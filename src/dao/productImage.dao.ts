import { ProductImage } from "../database/entity/ProductImage";
import { IProductImageCreateOrUpdate } from "../interface/IProductImage";


export interface ProductImageDao{
    findAll(): Promise<ProductImage[]>
    find(id: any): Promise<ProductImage>
    create(productImage: IProductImageCreateOrUpdate): Promise<ProductImage>
    update(id: any, productImage: IProductImageCreateOrUpdate): Promise<ProductImage>
    deleteProductImage(id: any): Promise<ProductImage>
}