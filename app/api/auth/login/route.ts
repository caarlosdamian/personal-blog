import User from '@/db/user.model';
import { validPassword } from '@/lib/helpers';
import dbConnect from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// import { signIn } from '@/auth'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await dbConnect();
    const user = await User.findOne({ email });
    const isValid = validPassword(password, user.password, user.salt);
    if (isValid) {
      const dateNow = new Date();
      const cookieStore = await cookies();
      cookieStore.set('session', user.email, {
        expires: new Date(dateNow.getTime() + 5 * 60 * 1000),
      });

      return NextResponse.json({ user: user.email });
    }
    throw Error('not autehnticated');
  } catch (error) {
    console.log(error);
  }
}
