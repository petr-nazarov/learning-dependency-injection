"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const base_1 = require("../base");
const user_model_1 = require("./user.model");
class UserService extends base_1.BaseService {
    constructor() {
        super(new user_model_1.UserModel());
    }
    create(user) {
        console.log('I am checking permission');
        super.create(user);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map