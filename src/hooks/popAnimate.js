"use client"
import React, { useEffect, useState } from 'react';

const usePopOutAnimation = () => {
  const [animationClass, setAnimationClass] = useState('animate-PopOut-1');

  useEffect(() => {
    const animations = ['animate-PopOut-1', 'animate-PopOut-2', 'animate-PopOut-3', 'animate-PopOut-4', 'animate-PopOut-5', 'animate-PopOut-6'];
    let i = 0;

    const interval = setInterval(() => {
      setAnimationClass(animations[i]);
      i = (i + 1) % animations.length;
    }, 2000); // Change this to adjust the delay between animations

    return () => clearInterval(interval);
  }, []);

  return animationClass;
};

export default usePopOutAnimation;