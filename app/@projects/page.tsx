'use client';
import React from 'react';
import Badge from '../components/badge';
import { Link as LinkIcon, MoveUpRight, X } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../lib/constants';
import ProjectCard from '../components/project';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDescription from '../components/project-description';

interface Project {
  title: string;
  description: string;
  badges: {
    text: string;
    badgeVariant: string;
  }[];
  links: string[];
}
const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState<null | Project>(
    null,
  );

  const handleCloseProjectDescription = () => {
    setSelectedProject(null);
  };

  return (
    <div className="px-8 p-8 lg:w-1/2 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              setSelectedProject={setSelectedProject}
              title={project.title}
              description={project.description}
              links={project.links}
              badges={project.badges}
              showcaseImage={project.coverImage!}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDescription
            project={selectedProject}
            close={handleCloseProjectDescription}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
