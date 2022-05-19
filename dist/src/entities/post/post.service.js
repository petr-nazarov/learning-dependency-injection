"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const base_1 = require("../base");
const post_model_1 = require("./post.model");
class PostService extends base_1.BaseService {
    constructor() {
        super(new post_model_1.PostModel());
    }
}
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map