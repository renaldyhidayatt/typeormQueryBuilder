import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductImage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    title: string

    @OneToOne(() => Product)
    product: Product
}