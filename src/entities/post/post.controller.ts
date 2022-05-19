//create
//update
//findMany
//findOne
//delete


import { BaseController } from "../base/base.controller";
import { PostDto } from "./post.dto";
import { PostModel } from "./post.model";
import { PostService } from "./post.service";


export class PostController extends BaseController<PostDto>{
 
  constructor(){
    super(new PostService());
  }

}