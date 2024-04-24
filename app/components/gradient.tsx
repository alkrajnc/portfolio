import Image from 'next/image';
import React from 'react';
import VectorBlurBg from '@/public/bg.svg';
import motion from 'framer-motion';

const Gradient = () => {
  // const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  return (
    <div
      /* onMouseMove={(e) => {
        setCursorPosition({ y: e.clientX, x: e.clientY });
      }} */
      className="w-full -z-10 h-full min-h-screen absolute inset-0"
    >
      <Image
        src={VectorBlurBg}
        alt="Gradient background"
        width={750}
        height={642}
        className=" blur-3xl -z-10 animate-rotate-warp opacity-30"
      />
      {/* <div
        className="absolute w-3 aspect-square rounded-full bg-purple-500"
        style={{
          top: `${cursorPosition.x - 6}px`,
          left: `${cursorPosition.y - 6}px`,
        }}
      /> */}
    </div>
  );
};

export default Gradient;
