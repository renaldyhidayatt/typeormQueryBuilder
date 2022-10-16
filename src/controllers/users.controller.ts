import { Request, Response } from "express";
import { IUser } from "../interface/IUser";

import UsersServices from "../services/users.service";


class UsersController {

    public async findAll(req: Request, res: Response) {
        try{
            const UserAll = await UsersServices.findAll();
    
            return res.status(200).json({
                message: "UserAll",
                data: UserAll
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async find(req: Request, res: Response) {
        try{
            const id = req.params.id
            const users =  await UsersServices.find(id)
            if (!users) {
                return res.status(400).json({
                    message: "Error Bad request"
                })
            }
    
            return res.status(200).json({
                message: "Success",
                data: users
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public async create(req: Request, res: Response) {
        try{
            const _newUser: IUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            }
            
            await UsersServices.create(_newUser);
    
    
            return res.status(200).json({
                message: "Success data",
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
        
    }

    public update(req: Request, res: Response){
        try{
            const user: IUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            }
    
            const updating = UsersServices.update(req.params.id, user)
            if (!updating) {
                return res.status(400).json({
                    message: "Error Bad Request",
                })
            }
            return res.status(200).json({
                message: "Success data",
                data: updating
            })
        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }

    public deleteUser(req: Request, res: Response){
        try{
            const deleting = UsersServices.deleteUser(req.params.id);
    
            if (!deleting) {
                return res.status(400).json({
                    message: "Error Bad Request",
                })
            }
    
            return res.status(200).json({
                message: "Success data",
                data: deleting
            })

        }catch(err){
            return res.json({
                message: `Bad Request: ${err}`
            })
        }
    }
}


export default new UsersController();