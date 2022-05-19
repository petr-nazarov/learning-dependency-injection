"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./src/entities/user/user.controller");
const post_controller_1 = require("./src/entities/post/post.controller");
const postController = new post_controller_1.PostController();
const userController = new user_controller_1.UserController();
postController.create({ title: 'Hello' });
userController.create({ username: 'Jon' });
//# sourceMappingURL=index.js.map