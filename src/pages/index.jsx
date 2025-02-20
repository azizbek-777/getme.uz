import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {
  FaDocker,
  FaGit,
  FaGithub,
  FaInstagram,
  FaJs,
  FaLinkedinIn,
  FaTelegram,
  FaNodeJs,
  FaUbuntu,
  FaPhp,
  FaLaravel,
  FaReact,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiNginx,
  SiMui,
  SiMantine,
  SiSocketdotio
} from 'react-icons/si'

import { GrMysql } from 'react-icons/gr'

import { DiRedis } from "react-icons/di";

import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { SOCIALLINKS } from '@/constants/socials'

function SocialLink({ icon: Icon, isTelegram, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
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
          content=" I'm Azizbek Berdimuratov, I am currently working as a programmer, my goal is to
          implement useful projects for the people and the company and to
          become a very strong programmer."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <IM></IM>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Azizbek, I'm currently working as a programmer, my goal is to
            implement useful projects for the people and the company and to
            become a very strong programmer.
          </p>
          <div className="mt-6 flex gap-5">
            <SocialLink
              href={SOCIALLINKS.linkedin}
              aria-label="Follow on LinkedIn"
              icon={FaLinkedinIn}
            />
            <SocialLink
              href={SOCIALLINKS.github}
              aria-label="Follow on GitHub"
              icon={FaGithub}
            />
            <SocialLink
              href={SOCIALLINKS.instagram}
              aria-label="Follow on Instagram"
              icon={FaInstagram}
            />
            <SocialLink
              href={SOCIALLINKS.telegram}
              aria-label="Follow on Telegram"
              icon={FaTelegram}
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Skills and Tools
          </h2>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: FaJs, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500 dark:text-yellow-400", hover: "hover:bg-yellow-100 dark:hover:bg-yellow-900" },
              { icon: SiTypescript, name: "TypeScript", url: "https://www.typescriptlang.org", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org", color: "text-green-600 dark:text-green-400", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
              { icon: SiNestjs, name: "NestJS", url: "https://nestjs.com", color: "text-red-600 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
              { icon: SiExpress, name: "ExpressJS", url: "https://expressjs.com", color: "text-gray-600 dark:text-gray-400", hover: "hover:bg-gray-100 dark:hover:bg-gray-900" },
              { icon: SiSocketdotio, name: "Socket.IO", url: "https://socket.io", color: "text-black dark:text-white", hover: "hover:bg-black dark:hover:bg-dark" },
              { icon: FaPhp, name: "PHP", url: "https://www.php.net", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: FaLaravel, name: "Laravel", url: "https://laravel.com", color: "text-red-500 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
              { icon: SiPostgresql, name: "PostgreSQL", url: "https://www.postgresql.org", color: "text-blue-500 dark:text-blue-300", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: GrMysql, name: "MySQL", url: "https://www.mysql.com", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: SiMongodb, name: "MongoDB", url: "https://www.mongodb.com", color: "text-green-500 dark:text-green-300", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
              { icon: DiRedis, name: "Redis", url: "https://redis.io", color: "text-red-500 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
              { icon: FaReact, name: "React", url: "https://react.dev", color: "text-blue-400 dark:text-blue-300", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: SiMui, name: "Material-UI", url: "https://mui.com", color: "text-blue-500 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: SiMantine, name: "Mantine", url: "https://mantine.dev", color: "text-blue-500 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
              { icon: FaUbuntu, name: "Linux", url: "https://ubuntu.com", color: "text-orange-600 dark:text-orange-400", hover: "hover:bg-orange-100 dark:hover:bg-orange-900" },
              { icon: SiNginx, name: "Nginx", url: "https://nginx.org", color: "text-green-500 dark:text-green-400", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
              { icon: FaGit, name: "Git", url: "https://git-scm.com", color: "text-red-500 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
              { icon: FaDocker, name: "Docker", url: "https://www.docker.com", color: "text-cyan-600 dark:text-cyan-400", hover: "hover:bg-cyan-100 dark:hover:bg-cyan-900" },
            ].map(({ icon: Icon, name, url, color, hover }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border border-gray-500 rounded-3xl flex items-center gap-2 transition transform 
          ${hover} hover:border-transparent hover:scale-105`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
                <span className="font-medium text-zinc-600 dark:text-zinc-400">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
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