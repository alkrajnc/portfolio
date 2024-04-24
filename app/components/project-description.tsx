import React from 'react';
import { motion } from 'framer-motion';
import { MoveUpRight, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  badges: {
    text: string;
    badgeVariant: string;
  }[];
  links: string[];
}

const ProjectDescription = ({
  project,
  close,
}: {
  project: Project;
  close: () => void;
}) => {
  return (
    <motion.div
      initial={{ backdropFilter: 'blur(0px)' }}
      animate={{ backdropFilter: 'blur(12px)' }}
      layoutId={project.title}
      className="absolute bg-neutral-800 inset-20 p-8 z-50 rounded-xl flex flex-col"
    >
      <motion.div className="self-end cursor-pointer" onClick={close}>
        <X className="hover:text-purple-500" />
      </motion.div>
      <div className="flex flex-col gap-6">
        <motion.h1 className="text-4xl font-bold">{project.title}</motion.h1>
        <motion.p className="text-neutral-300">{project.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
