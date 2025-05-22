import User from '@/db/user.model';
import { generatePassword } from '@/lib/helpers';
import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';
// import { signIn } from '@/auth'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const { hash, salt } = generatePassword(password);
    await dbConnect();
    await User.create({
      email,
      password: hash,
      salt,
    });
    return NextResponse.json({ message: 'Hello from Next.js!' });
  } catch (error) {
    console.log(error);
  }
}
