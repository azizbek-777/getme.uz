import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  IconBrandGit,
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandJavascript,
  IconBrandLinkedinFilled,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandTelegram,
  IconBrandUbuntu,
  IconFileTypePhp,
  IconSql,
} from '@tabler/icons-react';

import { Container } from '@/components/Container';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { SOCIALLINKS } from '@/constants/socials';

const skills = [
  { icon: IconBrandJavascript, name: 'JavaScript', color: 'yellow' },
  { icon: IconBrandNodejs, name: 'Node.js', color: 'green' },
  { icon: IconFileTypePhp, name: 'PHP', color: 'blue' },
  { icon: IconSql, name: 'PostgreSQL', color: 'blue' },
  { icon: IconBrandMongodb, name: 'MongoDB', color: 'green' },
  { icon: IconBrandUbuntu, name: 'Linux', color: 'orange' },
  { icon: IconBrandGit, name: 'Git', color: 'red' },
];

function SocialLink({ icon: Icon, isTelegram, ...props }) {
  return (
    <Link
      className="group -m-1 p-1 transition transform hover:scale-110"
      {...props}
    >
      <Icon
        stroke={isTelegram ? 0.3 : 1}
        className="h-6 w-6 fill-zinc-500 transition-all duration-200 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      />
    </Link>
  );
}

const IM = () => (
  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
    <Typewriter
      words={['I\'m a Software Engineer', 'I build web applications', 'I solve problems with code']}
      typeSpeed={50}
      backSpeed={30}
      cursor
      loop
    />
  </h2>
);

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Azizbek - Software Engineer</title>
        <meta
          name="description"
          content="I’m Azizbek Berdimuratov, I am currently working as a programmer, my goal is to implement useful projects for the people and the company and to become a very strong programmer."
        />
      </Head>
      <Container className="mt-40">
        <div className="max-w-2xl">
          <IM />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Azizbek, currently working as a programmer. My goal is to implement useful projects and become a strong engineer.
          </p>
          <div className="mt-6 flex gap-5">
            <SocialLink href={SOCIALLINKS.linkedin} ariaLabel="Follow on LinkedIn" icon={IconBrandLinkedinFilled} />
            <SocialLink href={SOCIALLINKS.github} ariaLabel="Follow on GitHub" icon={IconBrandGithubFilled} />
            <SocialLink href={SOCIALLINKS.instagram} ariaLabel="Follow on Instagram" icon={IconBrandInstagramFilled} />
            <SocialLink href={SOCIALLINKS.telegram} ariaLabel="Follow on Telegram" icon={IconBrandTelegram} />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Skills and Tools</h2>
          <div className="flex flex-wrap gap-4 pt-2">
            {skills.map(({ icon: Icon, name, color }, index) => (
              <div
                key={index}
                className={`px-4 py-2 border border-gray-500 rounded-3xl flex items-center gap-2 transition transform hover:bg-${color}-100 dark:hover:bg-${color}-900 hover:border-transparent hover:scale-105`}
              >
                <Icon className={`w-6 h-6 text-${color}-500 dark:text-${color}-400`} />
                <span className="font-medium text-zinc-600 dark:text-zinc-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles()).slice(0, 4).map(({ component, ...meta }) => meta),
    },
  };
}
