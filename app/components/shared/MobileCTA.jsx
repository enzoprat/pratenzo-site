'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { config } from '@/app/lib/config';

/* CTA flottante en bas d'écran sur mobile, après le hero. Cachée sur /contact, /merci. */
export default function MobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hideOnRoutes = ['/contact', '/merci'];

  useEffect(() => {
    if (hideOnRoutes.includes(pathname)) {
      setVisible(false);
      return;
    }
    const onScroll = () => {
      const passed = window.scrollY > window.innerHeight * 0.5;
      const inForm = document.querySelector('#form')?.getBoundingClientRect();
      const nearForm = inForm && inForm.top < window.innerHeight - 100 && inForm.bottom > 0;
      setVisible(passed && !nearForm);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mobile-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <a
            href={`tel:${config.phone.replace(/\s/g, '')}`}
            className="mobile-cta__call"
            aria-label="Appeler"
          >
            <Phone size={18} />
          </a>
          <Link href="/contact" className="mobile-cta__main">
            Demander mon site <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}