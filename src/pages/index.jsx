import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandTelegram, } from '@tabler/icons-react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import logoTexnopos from '@/images/logos/logo_texnopos.jpg'
import logoUzinfocom from '@/images/logos/logo_uzinfocom.jpg'
import logoKarsu from '@/images/logos/logo_karsu.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { SOCIALLINKS } from '@/constants/socials'

function Jobs({ title = 'Experience', data }) {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        {title}
      </h2>

      {/* Job Cards */}
      <div className="space-y-6 mt-4">
        {data.map((job, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center border dark:border-zinc-700/40 rounded-2xl p-4 gap-4 max-w-2xl shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
          >
            {/* Logo Section */}
            <div
              className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <Image
                src={job.logo}
                alt={`${job.name} logo`}
                className="h-12 w-12 rounded-full"
                unoptimized
              />
            </div>

            {/* Details Section */}
            <div>
              <h3 className="text-lg dark:text-zinc-100 font-semibold">
                {job.name} <span className="text-sm text-zinc-700 dark:text-zinc-400">{job.date}</span>
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-400">{job.position}</p>
              <p className="text-sm dark:text-zinc-200 mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function IM() {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl w-full h-10">
      <Typewriter
        words={["I'm Azizbek", "I'm a Software Engineer", "I build web applications", "I solve problems with code"]}
        typeSpeed={50}
        backSpeed={30}

        loop
      />
    </h2>
  );
}

export default function Home({ articles }) {

  const data = [
    {
      name: 'UZINFOCOM',
      logo: logoUzinfocom,
      position: 'Backend Developer',
      date: 'May 01, 2023 - Present',
      description: 'I work as a backend developer at UZINFOCOM. My focus is on developing and maintaining efficient backend systems for various projects. I contribute to optimizing the company\'s technological processes through modern technologies and innovative solutions.',
    },
    {
      name: 'TEXNOPOS',
      logo: logoTexnopos,
      position: 'Backend Developer',
      date: 'Jan 10, 2020 - Aug 20, 2022',
      description: 'At UzCard, I was responsible for creating and maintaining backend APIs for payment processing. I also optimized database queries and implemented security measures for the system.',
    },
  ];

  const dataEducation = [
    {
      name: 'Karakalpak State University',
      logo: logoKarsu,
      position: 'Student',
      date: 'Sep 01, 2021 - Jun 20, 2025',
      description: 'Studied in the Computer Science and Software Engineering program, gaining knowledge in C#, Python, and Java. Participated in practical projects focused on artificial intelligence and programming.',
    },
  ];


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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <IM></IM>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Azizbek, I am currently working as a programmer, my goal is to
            implement useful projects for the people and the company and to
            become a very strong programmer.
          </p>
          <div className="mt-6 flex gap-6">
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
            />
          </div>
        </div>
        {/* Download CV Button */}
        <Button
          href="./CV_Azizbek.pdf"
          variant="secondary"
          className="group w-36 mt-4"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </Container >
      <Container className="mt-12">
        <Jobs title='Education' data={dataEducation} />
        <Jobs title='Work Experience' data={data} />
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