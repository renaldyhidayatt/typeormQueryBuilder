import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "../database/entity/User"
import { SeederOptions} from "typeorm-extension";
import { Category } from "../database/entity/Categories";
import { Product } from "../database/entity/Product";
import { ProductImage } from "../database/entity/ProductImage";




const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "inventorytypeorm",
  synchronize: true,
  logging: false,
  entities: [User, Category, Product, ProductImage],
  migrations: ['src/database/migration/**/*{.ts,.js}'],
  subscribers: [],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}']
};


export const AppDataSource = new DataSource(options);

