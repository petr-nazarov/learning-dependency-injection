import { TSome, BaseService } from "../base";
import {PostModel} from  './post.model';


export class PostService extends BaseService{
  constructor(){
    super( new PostModel());
  }


  // functionToCheckPermissions(){
  //   console.log('I am checking post permissions')
  // }



  // create(entity :TSome){
  //   this.functionToCheckPermissions();
  //   super.create(entity)
  // }
}

//create
//update
//findMany
//findOne
//delete