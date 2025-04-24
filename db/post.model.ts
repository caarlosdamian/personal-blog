// models/Post.ts
import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPost extends Document {
  slug: string;
  publishedAt: Date;
  translations: Types.ObjectId[]; // referencias a traducciones
}

const PostSchema = new Schema<IPost>({
  slug: { type: String, required: true, unique: true },
  publishedAt: { type: Date, required: true },
  translations: [{ type: Schema.Types.ObjectId, ref: 'PostTranslation' }],
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
export default Post;
