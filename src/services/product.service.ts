import { ProductDao } from "../dao/product.dao";
import { Product } from "../database/entity/Product";
import { IProductCreateOrUpdate } from "../interface/IProduct";
import productRepository from "../repository/product.repository";


class ProductService implements ProductDao{

    public findAll(): Promise<Product[]> {
        return productRepository.findAll();
    }

    public find(id: any): Promise<Product>{
        return productRepository.find(id)
    }

    public create(product: IProductCreateOrUpdate): Promise<Product> {
        return productRepository.create(product)
    }

    public update(id: any, product: IProductCreateOrUpdate): Promise<Product> {
        return productRepository.update(id, product)
    }

    public deleteProduct(id: any): Promise<Product> {
        return productRepository.deleteProduct(id)
    }
}

export default new ProductService();