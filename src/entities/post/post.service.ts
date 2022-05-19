import {  BaseService } from "../base";
import { PostDto } from "./post.dto";
import {PostModel} from  './post.model';


export class PostService extends BaseService<PostDto>{
  constructor(){
    super( new PostModel());
  }
}

//create
//update
//findMany
//findOne
//delete