import { BaseService } from "./base.service";
export declare abstract class BaseController<TDto> {
    service: BaseService<TDto>;
    constructor(_service: BaseService<TDto>);
    create(entity: TDto): void;
    update(id: string, entity: TDto): void;
}
//# sourceMappingURL=base.controller.d.ts.map