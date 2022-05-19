"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor(_service) {
        this.service = _service;
    }
    create(entity) {
        this.service.create(entity);
    }
    update(id, entity) {
        this.service.update(id, entity);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map