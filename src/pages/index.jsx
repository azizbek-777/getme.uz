import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { IconBrandGit, IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandJavascript, IconBrandLinkedinFilled, IconBrandMongodb, IconBrandNodejs, IconBrandTelegram, IconBrandUbuntu, IconFileTypePhp, IconGitBranch, IconSql, } from '@tabler/icons-react'

import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { SOCIALLINKS } from '@/constants/socials'

function SocialLink({ icon: Icon, isTelegram, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      {isTelegram
        ? <Icon stroke={0.3} className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        : <Icon stroke={1} className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      }
    </Link>
  )
}

function IM() {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      <Typewriter
        words={["I'm a Software Engineer", "I build web applications", "I solve problems with code"]}
        typeSpeed={50}
        backSpeed={30}
        cursor={true}
        loop
      />
    </h2>
  );
}

export default function Home({ articles }) {

  return (
    <>
      <Head>
        <title>Azizbek - Software Engineer</title>
        <meta
          name="description"
          content=" I’m Azizbek Berdimuratov, I am currently working as a programmer, my goal is to
          implement useful projects for the people and the company and to
          become a very strong programmer."
        />
      </Head>
      <Container className="mt-40">
        <div className="max-w-2xl">
          <IM></IM>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Azizbek, I’m currently working as a programmer, my goal is to
            implement useful projects for the people and the company and to
            become a very strong programmer.
          </p>
          <div className="mt-6 flex gap-5">
            <SocialLink
              href={SOCIALLINKS.linkedin}
              aria-label="Follow on LinkedIn"
              icon={IconBrandLinkedinFilled}
            />
            <SocialLink
              href={SOCIALLINKS.github}
              aria-label="Follow on GitHub"
              icon={IconBrandGithubFilled}
            />
            <SocialLink
              href={SOCIALLINKS.instagram}
              aria-label="Follow on Instagram"
              icon={IconBrandInstagramFilled}
            />
            <SocialLink
              href={SOCIALLINKS.telegram}
              aria-label="Follow on Telegram"
              icon={IconBrandTelegram}
              isTelegram
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Skills and Tools
          </h2>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: IconBrandJavascript, name: "JavaScript", color: "text-yellow-500 dark:text-yellow-400", hover: "hover:bg-yellow-100 dark:hover:bg-yellow-900" },
              { icon: IconBrandNodejs, name: "Node.js", color: "text-green-600 dark:text-green-400", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
              { icon: IconFileTypePhp, name: "PHP", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: IconSql, name: "PostgreSQL", color: "text-blue-500 dark:text-blue-300", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: IconBrandMongodb, name: "MongoDB", color: "text-green-500 dark:text-green-300", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
              { icon: IconBrandUbuntu, name: "Linux", color: "text-orange-600 dark:text-orange-400", hover: "hover:bg-orange-100 dark:hover:bg-orange-900" },
              { icon: IconBrandGit, name: "Git", color: "text-red-500 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
            ].map(({ icon: Icon, name, color, hover }, index) => (
              <div
                key={index}
                className={`px-4 py-2 border border-gray-500 rounded-3xl flex items-center gap-2 transition transform 
          ${hover} hover:border-transparent hover:scale-105`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
                <span className="font-medium text-zinc-600 dark:text-zinc-400">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </Container >
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}