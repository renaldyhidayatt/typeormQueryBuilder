import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import validationRequest from "../../middleware/validate-request";




export default function userSchema(req: Request, res: Response, next: NextFunction){
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        age: Joi.number().required()
    })

    validationRequest(req, next, schema)
}