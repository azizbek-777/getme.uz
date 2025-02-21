import Image from 'next/future/image'
import Head from 'next/head'

import {
  FaJs,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiNestjs,
  SiExpress,
} from 'react-icons/si'

import { GoArrowUpRight } from "react-icons/go";


import logoTexnopos from '@/images/logos/logo_texnopos.jpg'


const cardData = [
  {
    id: 1,
    title: "The Pozdrav",
    description: "Бот собирает дни рождения участников и автоматически поздравляет их в чате.",
    image: logoTexnopos,
    link: "#"
  },

  {
    id: 1,
    title: "The Pozdrav",
    description: "Бот собирает дни рождения участников и автоматически поздравляет их в чате.",
    image: logoTexnopos,
    link: "#"
  },

  {
    id: 1,
    title: "The Pozdrav",
    description: "Бот собирает дни рождения участников и автоматически поздравляет их в чате.",
    image: logoTexnopos,
    link: "#"
  },

];

const PozdravCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 sm:mt-32 w-full justify-center">
      {cardData.map((card) => (
        <div key={card.id}
          className="w-[362px] rounded-xl overflow-hidden border dark:border dark:border-zinc-800">
          <div className="w-full h-[160px] overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              width={280}
              height={160}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className='p-[20px]'>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </p>
                <GoArrowUpRight
                  className="text-[#7D7D7D] text-2xl border border-[#7D7D7D] dark:text-zinc-400 rounded-md 
                          hover:text-white hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                          transition-colors duration-300 cursor-pointer"
                />

              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {card.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { icon: FaJs, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500 dark:text-yellow-400", hover: "hover:bg-yellow-100 dark:hover:bg-yellow-900" },
                { icon: SiTypescript, name: "TypeScript", url: "https://www.typescriptlang.org", color: "text-blue-600 dark:text-blue-400", hover: "hover:bg-blue-100 dark:hover:bg-blue-900" },
                { icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org", color: "text-green-600 dark:text-green-400", hover: "hover:bg-green-100 dark:hover:bg-green-900" },
                { icon: SiNestjs, name: "NestJS", url: "https://nestjs.com", color: "text-red-600 dark:text-red-400", hover: "hover:bg-red-100 dark:hover:bg-red-900" },
              ].map(({ icon: Icon, name, url, color, hover }, index) => (
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
