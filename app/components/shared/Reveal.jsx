'use client';

import { motion } from 'framer-motion';

/* Composant utilitaire : apparition au scroll, sobre */
export default function Reveal({ children, delay = 0, y = 24, as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  );
}