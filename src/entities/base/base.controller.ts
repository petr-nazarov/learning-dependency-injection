import { BaseService } from "./base.service";


export abstract class BaseController<TDto>{
  
  service: BaseService<TDto>;

  constructor(_service: BaseService<TDto>){
    this.service = _service;
  }
  create(entity: TDto){
    this.service.create(entity);
  }
  update(id:string, entity: TDto){
    this.service.update(id, entity);
  }
}