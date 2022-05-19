import {BaseModel} from '../base';
export class PostModel extends BaseModel{
  static collectionName: string = 'post';
 title: string;

 constructor(){
   super();
  this.collectionName = 'post'
}
 
}