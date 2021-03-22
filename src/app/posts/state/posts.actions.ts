import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

export const ADD_POST_ACTION = '[Posts] add post';
export const UPDATE_POST_ACTION = '[Posts] update post';
export const DELETE_POST_ACTION = '[Posts] delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
