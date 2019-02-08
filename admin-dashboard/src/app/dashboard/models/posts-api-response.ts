import { Post } from './post';

export interface PostsApiResponse {
    count: number;
    posts: Post[];
}
