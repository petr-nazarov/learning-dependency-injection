//create
//update
//findMany
//findOne
//delete

import { BaseController } from "../base/base.controller";
import { PostService } from "./post.service";


export class PostController extends BaseController{
 
  constructor(){
    super(new PostService());
  }
}