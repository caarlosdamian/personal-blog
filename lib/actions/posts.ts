import { PostI } from '@/types';
import dbConnect from '../mongodb';
import { Post, PostTranslation } from '@/db';
import { GetAllPostParams, GetPostsParams } from './shared.types';

// export const createPost = async ({ path, post }: CreatePostParams) => {
//   try {
//     const db = await connectToDatabase();
//     db.insert(postsTable).values({
//       ...post,
//       publishedAt: new Date() as unknown as string,
//     });
//     revalidatePath(path);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const deletePost = async ({ path, postId }: DeletePostParams) => {
//   try {
//     const db = await connectToDatabase();
//     await db.delete(postsTable).where(eq(postsTable.id, postId!));

//     revalidatePath(path);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const updatedPost = async ({ path, post }: UpdatePostParams) => {
//   try {
//     const db = await connectToDatabase();
//     db.update(postsTable)
//       .set({
//         ...post,
//         publishedAt: new Date() as unknown as string,
//       })
//       .where(eq(postsTable.id, post.id as unknown as number));

//     revalidatePath(path);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const getPost = async (params: GetPostParams) => {
//   const { postId } = params;
//   try {
//     const db = await connectToDatabase();
//     const post = await db
//       .select()
//       .from(postsTable)
//       .where(eq(postsTable.id, postId));

//     return post;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getPosts = async (params: GetPostsParams) => {
//   const { page = 1, pageSize = 10 } = params;
//   try {
//     const db = await connectToDatabase();
//     const posts = await db.select().from(postsTable);

//     const totalPages = Math.ceil(posts.length / pageSize);
//     const fromIndex = (page - 1) * pageSize;
//     const filterPost = posts.slice(fromIndex, fromIndex + pageSize);

//     return {
//       posts: filterPost,
//       totalPages,
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getAllPosts = async (
  params: GetAllPostParams
): Promise<
  | {
      posts: string;
      totalPages: number;
    }
  | undefined
> => {
  try {
    const { page = 1, pageSize = 10 } = params;

    await dbConnect();
    const posts = await Post.find();

    const totalPages = Math.ceil(posts.length / pageSize);
    const fromIndex = (page - 1) * pageSize;
    const filterPost = posts.slice(fromIndex, fromIndex + pageSize);

    return {
      posts: JSON.stringify(filterPost),
      totalPages,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByLocale = async (params: GetPostsParams) => {
  try {
    const { page = 1, pageSize = 10, locale } = params;

    await dbConnect();
    const posts = await PostTranslation.find({
      language: locale,
    })
      .populate({
        path: 'post',
        select: 'slug publishedAt -_id',
      })
      .lean();

    const totalPages = Math.ceil(posts.length / pageSize);
    const fromIndex = (page - 1) * pageSize;
    const filterPost = posts.slice(fromIndex, fromIndex + pageSize);

    return {
      posts: JSON.stringify(filterPost),
      totalPages,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getPostBySlug = async (
  slug: string,
  locale: string
): Promise<PostI | undefined> => {
  try {
    await dbConnect();
    const post = await Post.findOne({
      slug,
    }).populate({
      path: 'translations',
      match: { language: locale },
    });

    return post;
  } catch (error) {
    console.log(error);
  }
};

// export const getAllArtices = async (
//   locale: string
// ): Promise<PostI[] | undefined> => {
//   try {
//     await dbConnect();
//     const post = await Post.findOne({
//       slug,
//     }).populate({
//       path: 'translations',
//       match: { language: locale },
//     });

//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// };
