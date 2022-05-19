import { BaseModel } from "./base.model";


export  abstract class BaseService<TDto>{

  model: BaseModel;
  constructor(_model: BaseModel){
    this.model = _model;
  }
  create(entity: TDto){
    this.model.create(entity);
  }
  update(id:string, entity: TDto){
    this.model.update(id, entity);
  }
}