import { Post } from "src/app/models/posts.model";

export interface PostsState {
  posts: Post[]
}



export const initialState: PostsState = {
  posts: [
    {id: '1', title: 'Sample Title 1', description: 'Sample'}
  ]
}
