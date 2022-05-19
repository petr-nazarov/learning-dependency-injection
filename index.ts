import { UserController } from "./src/entities/user/user.controller";
import { PostController } from "./src/entities/post/post.controller";


// --------- //
const postController = new PostController()
const userController = new UserController()

  postController.create({title: 'Hello'})
  userController.create({username: 'Jon'})
