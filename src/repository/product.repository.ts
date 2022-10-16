import { AppDataSource } from "../config/data-source";
import { Category } from "../database/entity/Categories";
import { Product } from "../database/entity/Product";
import { IProductCreateOrUpdate } from "../interface/IProduct";


class ProductRepository {
    protected repository = AppDataSource.getRepository(Product);

    public async findAll(): Promise<Product[]> {
        return await this.repository.find();
    }

    public async find(id: any): Promise<Product> {
        return await this.repository.findOne({
            where: {
                id: id
            }
        })
    }

    public async create(product: IProductCreateOrUpdate): Promise<Product> {


        const categoryId = await AppDataSource.getRepository(Category).findOne({
            where: {
                id: product.categoryid
            }
        })
        if(!categoryId){
            throw new Error("Error undefined your id")
        }

        const _newProduct = new Product();

        _newProduct.name = product.name
        _newProduct.amount = product.amount
        _newProduct.category = categoryId

        return await _newProduct.save()

    }

    public async update(id: any, product: IProductCreateOrUpdate): Promise<Product>{
        const categoryId = await AppDataSource.getRepository(Category).findOne({
            where: {
                id: product.categoryid
            }
        })
        if(!categoryId){
            throw new Error("Error undefined your id")
        }

        const productId = await this.repository.findOne({
            where: {
                id: id
            }
        })

        if(!productId){
            throw new Error("Error Undefined your id")
        }

        productId.name = product.name
        productId.amount = product.amount
        productId.category = categoryId

        return await productId.save()
    }

    public async deleteProduct(id: any): Promise<Product>{
        const productId = await this.repository.findOne({
            where: {
                id: id
            }
        })

        if(!productId){
            throw new Error("Error Undefined your id")
        }

        return productId.remove()
    }
}

export default new ProductRepository();