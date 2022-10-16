import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Categories";
import { ProductImage } from "./ProductImage";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount: number;

    @OneToMany(() => ProductImage, (image) => image.product)
    photo: ProductImage[]

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category


}