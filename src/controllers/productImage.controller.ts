import { Request, Response } from "express";
import { IProductImageCreateOrUpdate } from "../interface/IProductImage";
import productImageService from "../services/productImage.service";

class ProductImageController {

    public findAll(req: Request, res: Response) {
        const findAll = productImageService.findAll()

        return res.json({
            message: "Successfully find ProductImage",
            data: findAll
        })
    }

    public find(req: Request, res: Response) {

        try {

            const findById = productImageService.find(req.params.id)
            if (!findById) {
                return res.json({
                    message: `Bad Request: Not found id Product Image`
                })
            }
            return res.json({
                message: "Successfuly find ProductImage",
                data: findById
            })
        } catch (err) {
            return res.json({
                nessage: `Bad Request: ${err}`
            })
        }

    }

    public async create(req: Request, res: Response){
        try{
            const _newProductImage: IProductImageCreateOrUpdate = {
                filename: req.body.filename,
                title: req.body.title,
                productId: req.body.productId
            }

            await productImageService.create(_newProductImage)
            
            return res.json({
                message: "Successfully Create ProductImage"
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async update(req: Request, res: Response){
        try{
            const _newProductImage: IProductImageCreateOrUpdate = {
                filename: req.body.filename,
                title: req.body.title,
                productId: req.body.productId
            }

            await productImageService.update(req.params.id,_newProductImage)
            
            return res.json({
                message: "Successfully Update ProductImage"
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async deleteProductImage(req: Request, res: Response){
        try{
            const findByIdAndDelete = productImageService.deleteProductImage(req.params.id);

            if(!findByIdAndDelete){
                return res.json({
                    message: `Bad Request: Id not found`
                })
            }

            return res.json({
                message: "Successfully Delete ProductImage"
            })
            
        }catch(err){
            return res.json({
                message: `Bad Request; ${err}`
            })
        }
    }
}

export default new ProductImageController();