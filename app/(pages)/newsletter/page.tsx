'use client';
import { Button, TextInput, Title } from '@/components';
import { postEmails } from '@/lib/actions/emails';
import { usePathname } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
};

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const pathname = usePathname();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    postEmails({ email: data, path: pathname });
  };

  return (
    <section className="text-ligh-600_dark-400 min-h-[841px]">
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
      <form
        className="mt-6 flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        key={String(isSubmitSuccessful)}
      >
        <TextInput
          placeholder="email@example.com"
          errorMessage={errors['email']?.message}
          label="Email Address"
          register={register}
          reset={reset}
          isSuccess={isSubmitSuccessful}
          successMessage="You’re subscribed! Check your inbox for updates."
          name="email"
          options={{
            pattern: {
              value: new RegExp('^[^@]+@[^@]+.[a-zA-Z]{2,}$'),
              message: 'Please enter a valid email address.',
            },
          }}
        />
        <Button className="max-w-fit">Stay updated</Button>
      </form>
      <p className="text-lg mt-2">Unsubscribe anytime. No spam, I promise 🙂</p>
    </section>
  );
};

export default Newsletter;
