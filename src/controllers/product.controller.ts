import { Request, Response } from "express";
import { IProductCreateOrUpdate, IProducts } from "../interface/IProduct";
import productService from "../services/product.service";


class ProductController{

    public async findAll(req: Request, res: Response){
        try{
            const findAll =  await productService.findAll()
    
            return res.json({
                message: "Success fully",
                data: findAll
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async create(req: Request, res: Response){
        try{
            const _create: IProductCreateOrUpdate = {
                name: req.body.name,
                amount: req.body.amount,
                categoryid :req.body.categoryId
            }
            await productService.create(_create)
    
            return res.json({
                message: "Success fully"
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async update(req: Request, res: Response){
        try{
            const _create: IProductCreateOrUpdate = {
                name: req.body.name,
                amount: req.body.amount,
                categoryid :req.body.categoryId
            }

            await productService.update(req.params.id, _create)

            return res.json({
                message: "Successfully"
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async deleteProduct(req: Request, res: Response){
        try{
            await productService.deleteProduct(req.params.id)

            return res.json({
                message: "Successfully Delete Product"
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }
}

export default new ProductController();