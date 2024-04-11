import React from 'react';
import Badge from '../components/badge';
import { Link as LinkIcon, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../lib/constants';

type BadgeVariants =
  | 'nextjs'
  | 'mysql'
  | 'express'
  | 'react'
  | 'firebase'
  | 'mongodb'
  | 'default'
  | 'accent';

const Projects = () => {
  return (
    <div className="px-8 p-8 lg:w-1/2 flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          return (
            <div
              className="p-4 rounded-xl space-y-3 group hover:bg-purple-500/5 transition-all"
              key={index}
            >
              <Link href={''}>
                <h1 className="text-2xl font-semibold">
                  {project.title}{' '}
                  <MoveUpRight
                    size={18}
                    className="inline group-hover:text-purple-700"
                  />
                </h1>
              </Link>
              <p className="text-neutral-500 ">{project.description}</p>
              {
                <div>
                  {project.links?.map((link, index) => {
                    return (
                      <Link key={index} href={link}>
                        <p
                          key={index}
                          className="flex flex-row gap-x-2 items-center hover:text-neutral-600 dark:hover:text-white hover:underline underline-offset-4 w-max transition-all text-neutral-500 dark:text-neutral-300"
                        >
                          <LinkIcon size={16} /> {link}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              }

              <div className="space-x-2">
                {project.badges.map((badge, index) => {
                  return (
                    <Badge
                      variant={badge.badgeVariant as BadgeVariants}
                      key={index}
                    >
                      {badge.text}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
