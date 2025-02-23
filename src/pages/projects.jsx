import Image from 'next/future/image'
import Head from 'next/head'

import {
  FaJs,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiTelegram,
  SiApachedolphinscheduler,
  SiNpm
} from 'react-icons/si'

import { GoArrowUpRight } from "react-icons/go";


import logoNPM from '@/images/logos/npm.png'
import logoThepozdrav from '@/images/logos/thepozdrav.png'
import logoGetme from '@/images/logos/getme.png'


const cardData = [
  {
    id: 1,
    title: "KAALIN",
    description: "JavaScript string methods are native to English, not Karakalpak. This solution library fills the gap with 1K+ downloads per week.",
    image: logoGetme,
    link: "https://www.npmjs.com/package/kaalin",
    stacks: [
      { icon: SiNpm, name: "NPM", url: "https://www.npmjs.com", color: "text-red-500 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
      { icon: FaJs, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500 dark:text-yellow-400", hover: "hover:bg-yellow-100 dark:hover:bg-yellow-900" },
      { icon: SiTypescript, name: "TypeScript", url: "https://www.typescriptlang.org", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
      { icon: FaNodeJs, name: "NodeJS", url: "https://nodejs.org", color: "text-green-500 dark:text-green-400", hover: "hover:bg-green-100 dark:hover:bg-green-900" }
    ]
  },
  {
    id: 2,
    title: "ThePozdravBot",
    description: "This bot reminds you of birthdays! 🎉 Add yours with /start, and it’ll notify you and the group. 🎂 Join 4100+ users & 400+ groups!",
    image: logoThepozdrav,
    link: "https://t.me/ThePozdravBot",
    stacks: [
      { icon: SiPython, name: "Python", url: "https://www.python.org", color: "text-blue-500 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
      { icon: SiPostgresql, name: "PostgreSQL", url: "https://www.postgresql.org", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
      { icon: SiTelegram, name: "Telegram", url: "https://telegram.org", color: "text-blue-400 dark:text-blue-300", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
    ]
  },
];

const PozdravCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 sm:mt-32 w-full justify-center">
      {cardData.map((card) => (
        <div key={card.id}
          className="w-[362px] rounded-xl overflow-hidden border shadow-sm shadow-zinc-800/20 border-zinc-800 dark:border-zinc-800">
          <div className="w-full h-44 overflow-hidden border-b border-zinc-800 dark:border-zinc-800">
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className='p-[18px]'>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </p>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <GoArrowUpRight
                    className="text-[#7D7D7D] text-2xl border border-[#7D7D7D] dark:text-zinc-400 rounded-md 
                          hover:text-white hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                          transition-colors duration-300 cursor-pointer"
                  />
                </a>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 h-[90px] overflow-hidden">
                {card.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {card.stacks?.map(({ icon: Icon, name, url, color, hover }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-1 py-1 border border-gray-500 rounded-3xl flex items-center gap-1 transition transform 
                      ${hover} hover:border-transparent hover:scale-105`}
                >
                  <Icon className={`w-3 ${color}`} />
                  <span className="font-medium text-[12px] text-zinc-600 dark:text-zinc-400">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects"
        />
      </Head>
      <PozdravCard />
    </>
  )
}
