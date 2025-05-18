import mongoose, { Schema, Document } from 'mongoose';

export interface IEmail extends Document {
  email: string;
}

const EmailSchema = new Schema<IEmail>({
  email: { type: String, required: true, unique: false },
});

const Email =
  mongoose.models?.Email || mongoose.model<IEmail>('Email', EmailSchema);
export default Email;
