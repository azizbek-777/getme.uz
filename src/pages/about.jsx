import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import { Button } from '@/components/Button'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
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

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="I’m Azizbek. I live in Nukus" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-6">
          I&apos;m Azizbek
        </h1>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
              <Button
                href="./CV_Azizbek.pdf"
                variant="secondary"
                className="border mt-2 w-full dark:border-zinc-900 rounded-xs"
              >
                Download CV
                <ArrowDownIcon
                  className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 ew:group-active:stroke-zinc-50" />
              </Button>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                a programmer who is constantly working on himself to achieve his goals. My passion for programming inspires me to seek new opportunities and constantly grow.
              </p>
              <p>
                I am a proponent of learning everything step by step and appreciating every success. As I learn programming, I strive to create new projects and inspire other programmers.
              </p>
              <p>
                Besides studying technology and developing software solutions, I am interested in sports and love to read. I am always open to new experiences!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <SocialLink
              href="mailto:contact@getme.uz"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@getme.uz
            </SocialLink>
          </div>
        </div>
      </Container>
    </>
  )
}
