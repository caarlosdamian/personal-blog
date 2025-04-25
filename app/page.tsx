import Image from 'next/image';
import { SectionWithList } from '../components/sectionWithList/SectionWithList';
import { socialLinks } from '../constants';
import { getPostsByLocale } from '@/lib/actions/posts';
import { seedDatabase, testDatabaseConnection } from '@/lib/actions/seed';
import { headers } from 'next/headers';
import { getActualLocale } from '@/lib/helpers';

export default async function Home() {
  const headersList = await headers();

  const locale = headersList.get('accept-language') as string;
  const actualLocale = getActualLocale(locale);
  const data = await getPostsByLocale({ locale: actualLocale, pageSize: 5 });
  const posts = JSON.parse(data?.posts || '');

  return (
    <main>
      <div className="flex flex-col gap-6 pb-8">
        <div className="flex flex-col relative">
          <h1 className="z-10 relative text-light-700_dark-0 text-3-5xl font-bold leading-10 -tracking-[0.5px]">
            Hi, I’m Carlos 👋
          </h1>
          {/* <button onClick={(}>Clikeando</button> */}
          <hr className="min-w-[230px] absolute bottom-1 border-none h-2 bg-blue-500" />
        </div>
        <article className="text-lg font-normal leading-6 text-ligh-600_dark-400 -tracking-[0.2px]">
          <p>
            I’m a senior front-end web developer with over 7 years of experience
            building high-quality, responsive, and scalable web applications.
            I’m passionate about crafting seamless user experiences, exploring
            new technologies, and sharing my knowledge with the community.
          </p>
          <p>
            When I’m not coding, you’ll find me refining my skills, staying
            up-to-date with industry trends, or enjoying a good
            challenge—whether it’s problem-solving in development or pushing my
            limits in outdoor adventures. I started this blog to share insights
            from my experience, document interesting challenges, and connect
            with fellow developers. Welcome to my space, and thanks for stopping
            by! 🚀
          </p>
        </article>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              className="bg-neutral-0 dark:bg-neutral-800 p-3 rounded-[8px] border-responsive"
            >
              <Image
                className="dark:invert"
                src={social.logo}
                alt={social.id}
                width="16"
                height="16"
              />
            </a>
          ))}
        </div>
      </div>
      <SectionWithList
        title="Latest Articles"
        elements={posts as []}
        link={{
          label: 'View all articles',
          to: '/articles',
        }}
      />
    </main>
  );
}
