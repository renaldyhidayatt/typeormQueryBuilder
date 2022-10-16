import { runSeeders } from "typeorm-extension"
import { AppDataSource } from "../../config/data-source";
import UserFactories from "../../database/factories/user.factory";
import UserSeeder from "../../database/seed/user.seed";

export const SeedAndFactories = async() => {
    return runSeeders(AppDataSource, {
        seeds: [UserSeeder,],
        factories: [UserFactories,],
    });
}