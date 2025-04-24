// models/PostTranslation.ts
import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPostTranslation extends Document {
  post: Types.ObjectId;         // Referencia al post base
  language: 'en' | 'es';        // o más idiomas si querés
  title: string;
  description: string;
  content: string;
}

const PostTranslationSchema = new Schema<IPostTranslation>({
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  language: { type: String, enum: ['en', 'es'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
});

const PostTranslation = mongoose.models.PostTranslation || mongoose.model<IPostTranslation>('PostTranslation', PostTranslationSchema);
export default PostTranslation;
