import React from 'react';
import Badge from '../components/badge';
import { Link as LinkIcon, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../lib/constants';

const Projects = () => {
  return (
    <div className="px-8 lg:p-16 lg:w-1/2 flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          return (
            <Link href="" key={index}>
              <div
                className="p-4 rounded-xl space-y-3 group hover:bg-purple-500/5 transition-all"
                key={index}
              >
                <h1 className="text-2xl font-semibold">
                  {project.title}{' '}
                  <MoveUpRight
                    size={18}
                    className="inline group-hover:text-purple-700"
                  />
                </h1>
                <p className="text-neutral-500 ">{project.description}</p>
                {
                  <div>
                    {project.links?.map((link, index) => {
                      return (
                        <p
                          key={index}
                          className="flex flex-row gap-x-2 items-center hover:text-white hover:underline underline-offset-4 w-max transition-all text-neutral-300"
                        >
                          <LinkIcon size={16} /> {link}
                        </p>
                      );
                    })}
                  </div>
                }

                <div className="space-x-2">
                  {project.badges.map((badge, index) => {
                    return (
                      <Badge variant="accent" key={index}>
                        {badge}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
