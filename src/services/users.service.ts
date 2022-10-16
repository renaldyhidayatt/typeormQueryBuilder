import { UserDao } from "../dao/users.dao";
import { User } from "../database/entity/User";
import { IUser } from "../interface/IUser";
import UsersRepository from "../repository/users.repository";

class UsersServices implements UserDao {
  public usersRepository = UsersRepository;


  
  public find(id: any): Promise<IUser> {
    return this.usersRepository.find(id);
  }

  public findAll(): Promise<IUser[]> {
    return this.usersRepository.findall();
  }

  public create(user: IUser): Promise<IUser>{
    return this.usersRepository.create(user);
  }
  public update(id: any, user: IUser): Promise<IUser> {
    return this.usersRepository.update(id, user)
  }
  public deleteUser(id: any): Promise<IUser> {
    return this.usersRepository.deleteUsers(id);
  }
}


export default new UsersServices();