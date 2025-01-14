import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import { Button } from '@/components/Button'
import logoTexnopos from '@/images/logos/logo_texnopos.jpg'
import logoUzinfocom from '@/images/logos/logo_uzinfocom.jpg'
import logoKarsu from '@/images/logos/logo_karsu.png'

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
function Jobs({ title = 'Experience', data }) {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl mt-10">
        {title}
      </h2>

      {/* Job Cards */}
      <div className="space-y-6 mt-4">
        {data.map((job, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center border dark:border-zinc-700/40 rounded-2xl p-4 gap-4 max-w-2xl shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-0
              transition-transform duration-300 hover:scale-105 focus:scale-105 hover:ring-zinc-300 focus:ring-zinc-300 dark:hover:ring-zinc-600 dark:focus:ring-zinc-600"
            tabIndex={0} // Klaviatura fokusi uchun
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
                {job.name}{' '}
                <span className="text-sm text-zinc-700 dark:text-zinc-400">
                  {job.date}
                </span>
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
              className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@getme.uz
            </SocialLink>
          </div>
        </div>
        <div className=''>
          <Jobs title='Education' data={dataEducation} />
          <Jobs title='Work Experience' data={data} />
        </div>
      </Container>
    </>
  )
}
