import {BaseModel} from '../base';
export class UserModel extends BaseModel{
  static collectionName: string = 'user';
  username: string;


  constructor(){
    super();
    this.collectionName = 'user'
  }
}


