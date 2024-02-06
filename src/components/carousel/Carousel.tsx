'use client';
import { useState } from 'react';
import { Next, Previous, slideVariants } from './Arrows';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagesProps {
  images: string[];
}

export default function Carousel({ images }: ImagesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState('left');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
  };
  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-[100%] h-auto flex justify-center items-center p-4 relative '>
      <div className='aspect-[3.25] w-[100%]'></div>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          variants={slideVariants}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate='visible'
          exit='exit'
          className='fit-fill absolute'
        />
      </AnimatePresence>
      <div className='slide_direction'>
        <Previous handlePrevious={handlePrevious} />
        <Next handleNext={handleNext} />
      </div>
      <div className='indicator'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
