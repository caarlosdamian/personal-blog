import { postsTable } from '@/db/schema';

export interface CreatePostParams {
  post: typeof postsTable.$inferInsert;
  path: string;
}

export interface DeletePostParams {
  postId: number;
  path: string;
}

export interface UpdatePostParams {
  post: typeof postsTable.$inferInsert;
  path: string;
}

export interface GetPostsParams {
  // sortBy?: string;
  page?: number;
  pageSize?: number;
  locale: string;
}
export interface GetPostParams {
  postId: number;
}
