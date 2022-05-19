"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(_model) {
        this.model = _model;
    }
    create(entity) {
        this.model.create(entity);
    }
    update(id, entity) {
        this.model.update(id, entity);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map