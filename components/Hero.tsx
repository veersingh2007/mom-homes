'use client';

import { motion } from 'framer-motion';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden">

      {/* ── Background video ── */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-bg/30 md:bg-bg/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/20 md:from-bg/60 md:to-bg/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.2)_100%)] md:bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.45)_100%)]" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-20 md:pb-28 px-4">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="font-body text-[10px] md:text-xs tracking-[0.35em] text-gold uppercase mb-8 md:mb-10"
        >
          Vancouver &nbsp;·&nbsp; Burnaby &nbsp;·&nbsp; Est. 2015
        </motion.p>

        {/* Massive display headline — clip prevents layout shift */}
        <div className="overflow-hidden mb-3 md:mb-5">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
            className="font-display text-[17vw] md:text-[14vw] lg:text-[11.5vw]
              leading-none tracking-[0.08em] text-cream uppercase text-center"
          >
            MOM HOMES
          </motion.h1>
        </div>

        {/* Italic tagline */}
        <div className="overflow-hidden mb-14 md:mb-16">
          <motion.p
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE }}
            className="font-display text-lg md:text-2xl lg:text-3xl italic
              text-cream/60 tracking-wide text-center"
          >
            Where vision meets craftsmanship
          </motion.p>
        </div>

        {/* Key-tag CTA — inspired by Aurora House */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
        >
          <a
            href="#consultation"
            className="group inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Key ring */}
            <span className="mr-3 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
              <span className="w-[7px] h-[7px] rounded-full border border-gold/50" />
            </span>
            {/* Tag */}
            <span
              className="bg-surface border border-gold/25 text-cream/85
                font-body text-[10px] md:text-xs tracking-[0.28em] uppercase
                px-7 py-3.5 rounded-[3px]
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                group-hover:bg-gold/10 group-hover:border-gold/55 group-hover:text-cream"
            >
              Begin Your Vision
            </span>
          </a>
        </motion.div>
      </div>

      {/* ── Bottom stats strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
        className="relative z-10 border-t border-cream/8 grid grid-cols-3 divide-x divide-cream/8"
      >
        {[
          ['Custom Builds',       'Five distinct services'],
          ['Est. 2015',           'A decade of craft'],
          ['Van · Burnaby',       'Lower Mainland'],
        ].map(([label, sub]) => (
          <div key={label} className="px-2 sm:px-4 py-4 text-center">
            <p className="font-body text-[7px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-cream/30">{sub}</p>
            <p className="font-body text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-cream/70 mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
