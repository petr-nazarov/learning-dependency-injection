"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const base_1 = require("../base");
class UserModel extends base_1.BaseModel {
    constructor() {
        super();
        this.collectionName = 'user';
    }
}
exports.UserModel = UserModel;
UserModel.collectionName = 'user';
//# sourceMappingURL=user.model.js.map