import { Title } from '@/components';
import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col gap-6">
      <Title label="About" />
      <div className="text-ligh-600_dark-400 flex flex-col gap-5">
        <p className="text-lg ">
          Hi, I’m <strong>Carlos Damián</strong>! Ever since I can remember,
          I’ve been passionate about creativity, technology, and building things
          that make a difference. That’s what drew me into the world of web
          development. I love the process of turning ideas into real, functional
          experiences that people can interact with—whether it's a sleek landing
          page or a complex application.
        </p>

        <p className="text-lg">
          When I’m not coding, you’ll often find me exploring new hobbies or
          diving into a good book. I enjoy everything from technology deep-dives
          to inspiring life stories. Reading not only helps me relax but also
          fuels my curiosity and creativity for new projects.
        </p>

        <p className="text-lg">
          Another passion of mine is staying active outdoors. I love hiking,
          cycling, and finding new adventures that challenge both mind and body.
          For me, overcoming a tough trail is a lot like overcoming a tough bug
          in code—both require patience, strategy, and perseverance!
        </p>

        <h3>Some books that have really inspired me:</h3>
        <ul className="list-decimal list-inside">
          <li>
            <em>“The Pragmatic Programmer”</em> by Andrew Hunt and David Thomas
            (a must-read for any developer)
          </li>
          <li>
            <em>“Ready Player One”</em> by Ernest Cline (a perfect mix of tech
            and adventure)
          </li>
          <li>
            <em>“The Hobbit”</em> by J.R.R. Tolkien (because who doesn’t love a
            good journey?)
          </li>
          <li>
            <em>“Educated”</em> by Tara Westover (a story of resilience and
            determination)
          </li>
        </ul>

        <p>
          I also take pride in creating a workspace that keeps me inspired and
          motivated every day. It's more than just a desk—it’s where ideas come
          to life!
        </p>

        <div className="relative w-full h-[368px]">
          <Image src="/assets/images/image-workspace-large.jpg" alt="desktop" fill objectFit='cover' className='rounded-2xl' />
        </div>
      </div>
    </section>
  );
};

export default About;
