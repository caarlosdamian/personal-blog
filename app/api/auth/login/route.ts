import User from '@/db/user.model';
import { validPassword } from '@/lib/helpers';
import dbConnect from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jose from 'jose';
import { createSecretKey } from 'crypto';

// await jwtVerify(token, secret, { algorithms: ['HS256'] });

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await dbConnect();
    const user = await User.findOne({ email });
    const isValid = validPassword(password, user.password, user.salt);
    if (isValid) {
      const dateNow = new Date();
      const cookieStore = await cookies();
      const secretKey = createSecretKey(process.env.JWT_SECRET || '', 'utf-8');
      const token = await new jose.SignJWT({
        id: '12345',
      })
        .setProtectedHeader({
          alg: 'HS256',
        })
        .setIssuedAt()
        .setExpirationTime('2h') // token expiration time, e.g., "1 day"
        .sign(secretKey); // secretKey generated from previous step
      cookieStore.set('session', token, {
        expires: new Date(dateNow.getTime() + 60 * 60 * 1000),
      });
      return NextResponse.json({ user: user.email });
    }
    throw Error('not autehnticated');
  } catch (error) {
    console.log(error);
  }
}
