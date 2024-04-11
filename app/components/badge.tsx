import React from 'react';
import { cm } from '../lib/utils';

type Props = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

const variants = {
  default: 'bg-neutral-800 text-neutral-100',
  accent: 'bg-purple-400/20 text-purple-300',
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
