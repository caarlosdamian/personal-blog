import Image from 'next/image';
import { SectionWithList } from '../components/sectionWithList/SectionWithList';
import { socialLinks } from '../constants';
import { getTopInteractedTags } from '@/lib/actions/testing';

export default function Home() {
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
          I’m a senior front-end web developer with over 7 years of experience
          building high-quality, responsive, and scalable web applications. I’m
          passionate about crafting seamless user experiences, exploring new
          technologies, and sharing my knowledge with the community. When I’m
          not coding, you’ll find me refining my skills, staying up-to-date with
          industry trends, or enjoying a good challenge—whether it’s
          problem-solving in development or pushing my limits in outdoor
          adventures. I started this blog to share insights from my experience,
          document interesting challenges, and connect with fellow developers.
          Welcome to my space, and thanks for stopping by! 🚀
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
      <SectionWithList title="Articles" elements={[]} />
    </main>
  );
}
