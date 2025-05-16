import { SectionWithList } from '../components/sectionWithList/SectionWithList';
import { getPostsByLocale } from '@/lib/actions/posts';
import { headers } from 'next/headers';
import { getActualLocale } from '@/lib/helpers';
import { SocialLinks, Title } from '@/components';

export default async function Home() {
  const headersList = await headers();

  const locale = headersList.get('accept-language') as string;
  const actualLocale = getActualLocale(locale);
  const data = await getPostsByLocale({ locale: actualLocale, pageSize: 5 });
  const posts = JSON.parse(data?.posts || '');

  return (
    <main>
      <div className="flex flex-col gap-6 pb-8">
        <Title label="Hi, I’m Carlos 👋" />
        <article className="text-lg font-normal leading-6 text-ligh-600_dark-400 -tracking-[0.2px] flex flex-col gap-5">
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
        <SocialLinks />
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
