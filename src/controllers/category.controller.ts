import { Request, Response } from "express";
import { ICategory } from "../interface/ICategory";
import categoryService from "../services/category.service";


class CategoryController {
    public async findAll(req: Request, res: Response) {
        try{
            const findall = await categoryService.findAll();
    
            return res.json({
                message: "Success full",
                data: findall
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async create(req: Request, res: Response){
        try{
            const _create = {
                name: req.body.name,
                description: req.body.description
            }
            await categoryService.create(_create)
    
            return res.json({
                message: "Success fully"
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async find(req: Request, res: Response) {

        try {
            const findById = await categoryService.findId(req.params.id);
            if (!findById) {
                return res.json({
                    message: "Bad Request"
                })
            }

            return res.json({
                message: "Successfully",
                data: findById
            })

        } catch (err) {
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const _newCategory: ICategory = {
                name: req.body.name,
                description: req.body.description
            }
            const findByUpdate = await categoryService.update(req.params.id, _newCategory)

            return res.json({
                message: "Successfully",
                data: findByUpdate
            })

        } catch (err) {
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async deleteCategory(req: Request, res: Response) {
        try {
            const deleteCategory = await categoryService.deleteCategory(req.params.id)

            if (!deleteCategory) {
                return res.json({
                    message: "Bad Request"
                })
            }

            return res.json({
                message: "Successfully delete",
            })

        } catch (err) {
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }


}

export default new CategoryController();