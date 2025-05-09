'use client';
import { Button, TextInput, Title } from '@/components';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState();
  return (
    <section className="text-ligh-600_dark-400">
      <Title label="Newsletter" withOutBorder />
      <div className="flex flex-col gap-4">
        <p className="text-lg">
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It’s a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I’ll send you updates whenever
          there’s something new to share.
        </p>
        <p className="text-light-700_dark-0 text-xl font-semibold ">
          I’d love to have you along for the ride and also hear about your own
          journey!
        </p>
      </div>
      <form className="mt-6 flex flex-col gap-4">
        <TextInput
          placeholder="email@example.com"
          isSuccess={isSuccess}
          label="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button className="max-w-fit">Stay updated</Button>
      </form>
    </section>
  );
};

export default Newsletter;
