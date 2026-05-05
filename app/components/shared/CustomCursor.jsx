'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hover, setHover] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('has-custom-cursor');
    setHidden(false);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    const onEnter = (e) => {
      setHover(true);
      const t = e.currentTarget.getAttribute?.('data-cursor-text') || '';
      setText(t);
    };
    const onLeave = () => {
      setHover(false);
      setText('');
    };

    const interactive = document.querySelectorAll(
      'a, button, input, textarea, select, [data-cursor-hover], [data-cursor-text]'
    );
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-attach when DOM changes (route or open accordion)
    const observer = new MutationObserver(() => {
      const newOnes = document.querySelectorAll(
        'a, button, input, textarea, select, [data-cursor-hover], [data-cursor-text]'
      );
      newOnes.forEach((el) => {
        if (!el.dataset.cursorBound) {
          el.dataset.cursorBound = '1';
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (hidden) return null;

  const hasText = !!text;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hover ? 'cursor-ring--hover' : ''} ${hasText ? 'cursor-ring--label' : ''}`}
        aria-hidden="true"
      />
      {hasText && (
        <div ref={labelRef} className="cursor-label" aria-hidden="true">
          {text}
        </div>
      )}
    </>
  );
}