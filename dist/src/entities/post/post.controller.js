"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const base_controller_1 = require("../base/base.controller");
const post_service_1 = require("./post.service");
class PostController extends base_controller_1.BaseController {
    constructor() {
        super(new post_service_1.PostService());
    }
}
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map