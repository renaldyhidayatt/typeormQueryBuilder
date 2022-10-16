import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/data-source";
import morgan from "morgan";
import UsersRoutes from "./routes/users.routes";
import CategoryRoutes from "./routes/category.routes";
import ProductRoutes from "./routes/product.routes";
import ProductImageRoutes from "./routes/productImage.routes";
import ExperimentalRoutes from "./routes/myexperimental.routes";
import errorHandler from "./middleware/error-handler";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.connectDatabase();
    this.myRoutes();
    // this.seedAndFactories();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(errorHandler);
  }

  private connectDatabase() {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => console.error(`could not connect to Postgres ${err}`));
  }

  // private seedAndFactories(){
  //   console.log("Running Seed Factories")
  //   SeedAndFactories();
  // }

  private myRoutes() {
    this.app.use("/users", UsersRoutes);
    this.app.use("/category", CategoryRoutes);
    this.app.use("/product", ProductRoutes);
    this.app.use("/productImage", ProductImageRoutes);
    this.app.use("/experimental", ExperimentalRoutes);
  }
}

export default App;
