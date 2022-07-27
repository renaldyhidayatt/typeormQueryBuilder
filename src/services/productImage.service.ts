import { ProductImageDao } from "../dao/productImage.dao";
import { ProductImage } from "../database/entity/ProductImage";
import { IProductImageCreateOrUpdate } from "../interface/IProductImage";
import productImageRepository from "../repository/productImage.repository";


class ProductImageService implements ProductImageDao{

    findAll(): Promise<ProductImage[]> {
        return productImageRepository.findAll()
    }

    find(id: any): Promise<ProductImage> {
        return productImageRepository.find(id)
    }

    create(productImage: IProductImageCreateOrUpdate): Promise<ProductImage> {
        return productImageRepository.create(productImage)
    }

    update(id: any, productImage: IProductImageCreateOrUpdate): Promise<ProductImage> {
        return productImageRepository.update(id, productImage)
    }

    deleteProductImage(id: any): Promise<ProductImage> {
        return productImageRepository.deleteProductImage(id)
    }

}

export default new ProductImageService();