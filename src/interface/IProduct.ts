import { ICategory } from "./ICategory";
import { IProductImage } from "./IProductImage";


export interface IProducts{
    name: string;
    amount: number;
    photo?: IProductImage[];
    category?: ICategory;
}

export interface IProductCreateOrUpdate{
    name: string;
    amount: number;
    categoryid: number
}