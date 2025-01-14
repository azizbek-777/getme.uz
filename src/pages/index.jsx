import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandTelegram, } from '@tabler/icons-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoTexnopos from '@/images/logos/logo_texnopos.jpg'
import logoUzinfocom from '@/images/logos/logo_uzinfocom.jpg'
import logoKarsu from '@/images/logos/logo_karsu.png'
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
    <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl w-full h-10">
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
      <Container className="mt-[10vh]">
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
        {/* Download CV Button */}
      </Container >
      {/* <Container>
        <Jobs title='Education' data={dataEducation} />
        <Jobs title='Work Experience' data={data} />
      </Container> */}
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