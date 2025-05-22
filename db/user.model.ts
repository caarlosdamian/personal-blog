import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  salt: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: false },
  password: { type: String, required: true, unique: false },
  salt: { type: String, required: true, unique: false },
});

const User = mongoose.models?.User || mongoose.model<IUser>('User', UserSchema);
export default User;
