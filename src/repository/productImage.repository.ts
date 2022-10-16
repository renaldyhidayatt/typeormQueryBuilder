import { AppDataSource } from "../config/data-source";
import { Product } from "../database/entity/Product";
import { ProductImage } from "../database/entity/ProductImage";
import { IProductImageCreateOrUpdate } from "../interface/IProductImage";

class ProductImageRepository{
    protected repository = AppDataSource.getRepository(ProductImage);

    public async findAll(): Promise<ProductImage[]>{
        return await this.repository.find()
    }

    public async find(id: any): Promise<ProductImage>{
        return await this.repository.findOne({
            where: {
                id: id
            }
        })
    }

    public async create(productImage: IProductImageCreateOrUpdate): Promise<ProductImage>{

        const productId = await AppDataSource.getRepository(Product).findOne({
            where: {
                id: productImage.productId
            }
        })

        const _newProductImage = new ProductImage();

        _newProductImage.filename = productImage.filename
        _newProductImage.title = productImage.title
        _newProductImage.product = productId

        return await _newProductImage.save()
        
    }

    public async update(id: any, productImage: IProductImageCreateOrUpdate): Promise<ProductImage>{
        const productId = await AppDataSource.getRepository(Product).findOne({
            where: {
                id: productImage.productId
            }
        })

        const productImageId = await this.repository.findOne({
            where: {
                id: id
            }
        })


        productImageId.filename = productImage.filename
        productImageId.title = productImage.title
        productImageId.product = productId

        return await productImageId.save()
    }

    public async deleteProductImage(id: any): Promise<ProductImage>{
        const productImageId = await this.repository.findOne({
            where: {
                id: id
            }
        })

        return await productImageId.remove()
    }
}

export default new ProductImageRepository();