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

export interface GetPostParams {
  // sortBy?: string;
  page?: number;
  pageSize?: number;
}
