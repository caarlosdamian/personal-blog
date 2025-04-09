import { postsTable } from '@/db/schema';
import { connectToDatabase } from '../mysql';
import {
  CreatePostParams,
  DeletePostParams,
  GetPostParams,
  UpdatePostParams,
} from './shared.types';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export const createPost = async ({ path, post }: CreatePostParams) => {
  try {
    const db = await connectToDatabase();
    db.insert(postsTable).values({
      ...post,
      publishedAt: new Date() as unknown as string,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePost = async ({ path, postId }: DeletePostParams) => {
  try {
    const db = await connectToDatabase();
    await db.delete(postsTable).where(eq(postsTable.id, postId!));

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatedPost = async ({ path, post }: UpdatePostParams) => {
  try {
    const db = await connectToDatabase();
    db.update(postsTable)
      .set({
        ...post,
        publishedAt: new Date() as unknown as string,
      })
      .where(eq(postsTable.id, post.id as unknown as number));

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getPosts = async (params: GetPostParams) => {
  const { page = 1, pageSize = 10 } = params;
  try {
    const db = await connectToDatabase();
    const posts = await db.select().from(postsTable);
    
    const totalPages = Math.ceil(posts.length / pageSize);
    const fromIndex = (page - 1) * pageSize;
    const filterPost = posts.slice(fromIndex, fromIndex + pageSize);

    return {
      posts: filterPost,
      totalPages,
    };
  } catch (error) {
    console.error(error);
  }
};
