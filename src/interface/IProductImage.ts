import { IProducts } from "./IProduct";


export interface IProductImage{
    filename: string;
    title: string;
    product?: IProducts
}

export interface IProductImageCreateOrUpdate{
    filename: string;
    title: string;
    productId: number
}