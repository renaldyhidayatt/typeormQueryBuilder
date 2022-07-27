
import { User } from "../database/entity/User";
import { IUser } from "../interface/IUser";

export interface UserDao {
  findAll(): Promise<IUser[]>
  find(id: any): Promise<IUser>
  create(user: IUser): Promise<IUser>
  update(id: any, user: IUser): Promise<IUser>
  deleteUser(id: any): Promise<IUser>
}
