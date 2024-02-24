"use client";
import React, { useState, useEffect } from "react";

const useFetchImage = (images) => {
  // Corrected the function name and added images as a parameter
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage) => {
        const currentIndex = images.indexOf(currentImage); // Corrected the variable name
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [images]); // Added images as a dependency

  return currentImage;
};

export default useFetchImage;
