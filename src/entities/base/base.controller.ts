import { BaseService } from "./base.service";
import { TSome } from "./base.types";

class SomeService extends BaseService {
}

export class BaseController{
  
  service: SomeService;

  constructor(_service: SomeService){
    this.service = _service;
  }
  create(entity: TSome){
    this.service.create(entity);
  }
  update(id:string, entity: TSome){
    this.service.update(id, entity);
  }
}