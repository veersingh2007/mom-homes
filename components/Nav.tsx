'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const links = [
  { label: 'Work',     href: '/projects'     },
  { label: 'Services', href: '#services'     },
  { label: 'About',    href: '#about'        },
  { label: 'Process',  href: '#process'      },
  { label: 'Contact',  href: '#consultation' },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      setTimeout(() => {
        if (pathname === '/') {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          router.push('/' + href);
        }
      }, 420);
    } else {
      setTimeout(() => router.push(href), 420);
    }
  };

  return (
    <>
      {/* ── Persistent top bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-6 md:px-12 lg:px-16 py-5 transition-all duration-700
          ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-cream/5' : ''}`}
      >
        <a href="/" aria-label="MOM Homes — home">
          <Image
            src="/mh-logo.png"
            alt="MOM Homes Inc"
            width={96}
            height={42}
            className="h-8 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
            priority
          />
        </a>

        {/* Hamburger — two lines that widen on hover */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[6px] group cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="block h-px w-7 bg-cream/80 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-9 group-hover:bg-gold" />
          <span className="block h-px w-4 bg-cream/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-9 group-hover:bg-gold" />
        </button>
      </header>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-[200] bg-bg/96 backdrop-blur-2xl flex flex-col"
          >
            {/* Top bar inside overlay */}
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 border-b border-cream/5">
              <Image
                src="/mh-logo.png"
                alt="MOM Homes Inc"
                width={96}
                height={42}
                className="h-8 w-auto object-contain opacity-85"
              />
              {/* X close button */}
              <button
                onClick={() => setOpen(false)}
                className="relative w-9 h-9 flex items-center justify-center group cursor-pointer"
                aria-label="Close navigation"
              >
                <span className="absolute block h-px w-6 bg-cream/70 rotate-45 transition-colors group-hover:bg-gold" />
                <span className="absolute block h-px w-6 bg-cream/70 -rotate-45 transition-colors group-hover:bg-gold" />
              </button>
            </div>

            {/* Nav links — staggered reveal */}
            <nav className="flex-1 min-h-0 overflow-y-auto flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease: EASE }}
                  className="border-t border-gold/10 last:border-b py-5 md:py-7"
                >
                  <button
                    onClick={() => navigate(link.href)}
                    className="font-display text-5xl md:text-7xl lg:text-8xl
                      text-cream/80 hover:text-gold italic tracking-tight
                      transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer strip inside overlay */}
            <div className="px-6 md:px-12 lg:px-16 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-cream/5">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted">
                Vancouver &amp; Burnaby · Est. 2015
              </p>
              <a
                href="tel:+16047165688"
                className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50 hover:text-gold transition-colors"
              >
                604 · 716 · 5688
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
