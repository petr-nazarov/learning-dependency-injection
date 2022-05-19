import { PostController } from "./entities/post/post.controller";

let httpPath = '/api/v1/';
let method = 'POST';
let body = {
  title : 'My new post'
}


// --------- //
const postController = new PostController()

if (httpPath === '/post' && method === 'POST'){
  postController.create(body)
}