import React from 'react';
import { cm } from '../lib/utils';

type Props = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

const variants = {
  default: 'bg-neutral-800 text-neutral-100',
  accent:
    'bg-purple-400/80 dark:bg-purple-400/20 text-white dark:text-purple-300',
  react: 'bg-[#5adafd] text-black',
  nextjs: 'bg-[#000000] text-[#ffffff]',
  mongodb: 'bg-[#45a347] text-white',
  express: 'bg-[#3d3d3d] text-white',
  mysql: 'bg-[#005e83] text-white',
  firebase: 'bg-[#fdca00] text-black ',
};

const Badge = ({ children, variant }: Props) => {
  return (
    <span
      className={cm(
        'rounded-full px-3 py-1 text-xs font-medium',
        variant ? variants[variant] : variants.default,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
