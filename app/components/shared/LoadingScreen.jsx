'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Écran d'intro premium : logo qui se révèle, puis fade out */
export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // On affiche l'intro UNE SEULE FOIS par session
    const seen = sessionStorage.getItem('siteweb33_intro');
    if (seen) {
      setShow(false);
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('siteweb33_intro', '1');
      document.body.style.overflow = '';
    }, 1400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="loader__bg" aria-hidden="true">
            <div className="loader__blob loader__blob--1" />
            <div className="loader__blob loader__blob--2" />
          </div>

          <motion.div
            className="loader__logo"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              className="loader__mark"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              PE
            </motion.div>
            <motion.div className="loader__name">
              {'Prat Enzo'.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.45 + i * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  style={{
                    display: 'inline-block',
                    color: i >= 5 ? 'var(--primary-3)' : '#fff',
                    minWidth: ch === ' ' ? '0.4em' : 'auto'
                  }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="loader__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          />

          <motion.div
            className="loader__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Agence de création de sites web
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}