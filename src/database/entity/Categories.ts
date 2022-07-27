import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";


@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    description: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}