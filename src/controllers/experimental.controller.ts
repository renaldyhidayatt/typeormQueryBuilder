import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Category } from "../database/entity/Categories";
import { Product } from "../database/entity/Product";

class ExperimentalController {
  public async findAll(req: Request, res: Response) {
    try {
      const mytest = await AppDataSource.getRepository(Category)
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.products", "product")
        .where("product.id = :productId", {
          productId: req.params.id,
        })
        .getMany();

      return res.json(mytest);
    } catch (err) {
      return res.json({
        message: `Bad Request: ${err}`,
      });
    }
  }
}

export default new ExperimentalController();
