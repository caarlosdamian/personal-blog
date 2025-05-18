'use server';
import Email from '@/db/email.model';
import dbConnect from '../mongodb';
import { CreateEmailParams } from './shared.types';
import { revalidatePath } from 'next/cache';

export const postEmails = async (params: CreateEmailParams) => {
  try {
    await dbConnect();
    await Email.create(params.email);
    revalidatePath(params.path);
  } catch (error) {
    console.log('error:++', error);
  }
};

// MONGODB_URI 🚫
// NEXT_PUBLIC_MONGODB_URI ✅
