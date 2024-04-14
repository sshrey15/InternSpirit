import React from 'react';
 // Replace with the actual path
import Image from 'next/image'; // Assuming you're using Next.js (optional for React)

const Animation = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image src="/loading/loader.gif" alt="Centered Animation GIF" width={100} height={100} />
    </div>
  );
};

export default Animation;
