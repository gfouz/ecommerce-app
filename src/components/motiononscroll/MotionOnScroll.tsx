'use client';
import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MotionOnScrollProps {
  className?: string;
  children?: React.ReactNode;
  variants?: Variants | undefined;
}

const MotionOnScroll = (props: MotionOnScrollProps) => {
  const { children, variants, className } = props;
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnScroll;
