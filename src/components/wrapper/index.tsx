import { motion } from 'framer-motion';
import React from 'react';

export const MotionWrapper = (Component: React.FunctionComponent, props?:any) => function HOC(props?: any) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Component />
    </motion.div>
  );
};