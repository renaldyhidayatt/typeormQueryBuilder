import { setSeederFactory } from "typeorm-extension";
import { User } from "../entity/User";

export default setSeederFactory(User, (faker) => {
    const user = new User();
    user.firstName = faker.name.firstName("male");
    user.lastName = faker.name.lastName("female");
    user.age = 20;

    return user;
})