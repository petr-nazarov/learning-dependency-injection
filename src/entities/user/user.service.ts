//create
//update
//findMany
//findOne
//delete
import { BaseService } from "../base";
import { UserModel } from "./user.model";


export class UserService extends BaseService {
  constructor() {
    super(new UserModel());
  }
}