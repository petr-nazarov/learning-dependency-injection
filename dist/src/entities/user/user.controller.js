"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_1 = require("../base");
const user_service_1 = require("./user.service");
class UserController extends base_1.BaseController {
    constructor() {
        super(new user_service_1.UserService());
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map