import { BaseModel } from "./base.model";
export declare abstract class BaseService<TDto> {
    model: BaseModel;
    constructor(_model: BaseModel);
    create(entity: TDto): void;
    update(id: string, entity: TDto): void;
}
//# sourceMappingURL=base.service.d.ts.map