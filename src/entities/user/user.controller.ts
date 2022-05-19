//create
//update
//findMany
//findOne

import { BaseController } from "../base";
import { UserDto } from "./user.dto";

import { UserModel } from "./user.model";
import { UserService } from "./user.service";

//delete
export class UserController extends BaseController<UserDto>{
  constructor(){
    super(new UserService());
  }
}