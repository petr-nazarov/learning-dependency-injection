//create
//update
//findMany
//findOne
//delete
import { BaseService } from "../base";
import { UserDto } from "./user.dto";
import { UserModel } from "./user.model";


export class UserService extends BaseService<UserDto>{
  constructor() {
    super(new UserModel());
  }

  create(user: UserDto) {
    console.log('I am checking permission');
    super.create(user);
  }
}