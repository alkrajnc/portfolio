import Image from 'next/image';
import Link from 'next/link';
import { leftMenu } from './lib/constants';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-8 lg:p-16 flex flex-col justify-evenly">
      <div>
        <h1 className="text-4xl md:text-6xl py-2 font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-violet-400 dark:to-violet-300">
          Aljaž Krajnc
        </h1>
        <p className="mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="hidden lg:block">
        <ul className="text-xl dark:text-neutral-200 space-y-4">
          {leftMenu.map((item, index) => {
            return (
              <li
                className="hover:underline font-medium w-max transition-all"
                key={index}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-2  mt-16">
        <Link
          href={'https://github.com/alkrajnc'}
          className="p-4 aspect-square flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg  border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
        >
          <Github size={20} />
        </Link>
        <Link
          href={''}
          className="p-4 aspect-square flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg  border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
        >
          <Linkedin size={20} />
        </Link>
      </div>
    </div>
  );
}
