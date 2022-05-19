import { BaseModel } from "./base.model";
import { TSome } from "./base.types";


export class BaseService{

  model: BaseModel;
  constructor(_model: BaseModel){
    this.model = _model;
  }
  create(entity: TSome){
    this.model.create(entity);
  }
  update(id:string, entity: TSome){
    this.model.update(id, entity);
  }
}