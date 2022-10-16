import { Seeder, SeederFactoryManager} from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository =  dataSource.getRepository(User);
        await repository.insert([
            {
                firstName: 'Caleb',
                lastName: 'Barrows',
                age: 18
            }
        ]);

        // ---------------------------------------------------

        const userFactory = factoryManager.get(User);
        await userFactory.save();
    }
}