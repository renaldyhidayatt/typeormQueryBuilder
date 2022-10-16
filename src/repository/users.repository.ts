import { AppDataSource } from "../config/data-source";
import { User } from "../database/entity/User";
import { IUser } from "../interface/IUser";

class UsersRepository {
  protected repository = AppDataSource.getRepository(User);


  public findall(): Promise<User[]>{
    return this.repository.find();
  }

  public find(id: any): Promise<User> {
    return this.repository.findOne({
      where: {
        id: id
      }
    })
  }

  public async create(user: IUser): Promise<User> {
    const _newUser: IUser = new User();
    _newUser.firstName = user.firstName;
    _newUser.lastName = user.lastName;
    _newUser.age = user.age;

    return await this.repository.save(_newUser);
  }

  public async update(id: any, user: IUser): Promise<User> {


    const updateUser = await this.repository.findOneBy({
      id: id
    })

    updateUser.firstName = user.firstName;
    updateUser.lastName = user.lastName;
    updateUser.age = user.age;

    return await this.repository.save(updateUser);

  }

  public async deleteUsers(id: any): Promise<User> {
    const deleteUser = await this.repository.findOneBy({
      id: id
    })

    
    return await deleteUser.remove()
  }

}

export default new UsersRepository();