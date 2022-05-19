//create
//update
//findMany
//findOne

import { BaseController } from "../base";
import { UserService } from "./user.service";

//delete
export class UserController extends BaseController{
  constructor(){
    super(new UserService());
  }
}