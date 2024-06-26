'use client';
import { LinkIcon, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Badge from './badge';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  badges: {
    text: string;
    badgeVariant: string;
  }[];
  links: string[];
  showcaseImage: string;
  detail: { description: string };
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      badges: {
        text: string;
        badgeVariant: string;
      }[];
      links: string[];
      detail: { description: string };
    } | null>
  >;
}

type BadgeVariants =
  | 'nextjs'
  | 'mysql'
  | 'express'
  | 'react'
  | 'firebase'
  | 'mongodb'
  | 'default'
  | 'accent';

const ProjectCard = ({
  title,
  description,
  links,
  badges,
  showcaseImage,
  detail,
  setSelectedProject,
}: Project) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      layoutId={title}
      className="p-4 z-20 lg:min-w-[700px] overflow-hidden relative rounded-xl space-y-3 bg-contain group hover:bg-neutral-900/15 transition-all"
    >
      <h1
        className="text-2xl text-neutral-200 hover:text-neutral-100 font-semibold \cursor-pointer"
        onClick={() =>
          setSelectedProject({ title, description, links, badges, detail })
        }
      >
        {title}{' '}
        {/* <MoveUpRight
          size={18}
          className="inline group-hover:text-purple-600 transition-colors"
        /> */}
      </h1>
      <p className="text-neutral-300 ">{description}</p>
      {
        <div>
          {links?.map((link, index) => {
            return (
              <Link
                className="flex flex-row gap-x-2 items-center hover:text-neutral-600 dark:hover:text-white hover:underline underline-offset-4 w-max transition-all text-neutral-500 dark:text-neutral-300"
                key={index}
                href={link}
              >
                <LinkIcon size={16} /> {link}
              </Link>
            );
          })}
        </div>
      }

      <div className="space-x-2">
        {badges.map((badge, index) => {
          return (
            <Badge variant={badge.badgeVariant as BadgeVariants} key={index}>
              {badge.text}
            </Badge>
          );
        })}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{
              maskImage: 'linear-gradient(to left, black, transparent 80%)',
            }}
            className="w-[900px]  absolute h-[500px] top-4 left-2 -rotate-[5deg] -z-10"
          >
            <Image
              src={showcaseImage}
              alt="Project cover image"
              width={800}
              className=""
              objectFit="fill"
              height={400}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
