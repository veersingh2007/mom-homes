'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="about" ref={ref} className="bg-bg py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: EASE }}
          className="flex items-center gap-6 mb-20 md:mb-28"
        >
          <div className="h-px w-16 bg-cream/8" />
          <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold">
            The Craftsman
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">

          {/* Left — stats + ghost watermark */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            {/* Ghost watermark */}
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-4 md:-left-8
                font-display leading-none select-none pointer-events-none
                text-[26vw] lg:text-[17vw] text-cream/[0.03]"
            >
              TIM
            </span>

            {/* Stats */}
            <div className="relative z-10 pt-16 lg:pt-24">
              <div className="border-t border-gold/20 pt-10 pb-10">
                <div className="overflow-hidden mb-2">
                  <motion.p
                    initial={{ y: '105%' }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: EASE }}
                    className="font-display text-8xl md:text-9xl text-gold italic leading-none"
                  >
                    10+
                  </motion.p>
                </div>
                <p className="font-body text-[10px] tracking-[0.28em] uppercase text-muted">
                  Years of Craft
                </p>
              </div>

              <div className="border-t border-cream/6 pt-10">
                <div className="overflow-hidden mb-2">
                  <motion.p
                    initial={{ y: '105%' }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.32, ease: EASE }}
                    className="font-display text-8xl md:text-9xl text-cream/15 italic leading-none"
                  >
                    5
                  </motion.p>
                </div>
                <p className="font-body text-[10px] tracking-[0.28em] uppercase text-muted">
                  Distinct Services
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.1, delay: 0.18, ease: EASE }}
                className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-cream italic leading-tight"
              >
                Built on belief.<br />Finished with care.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
              className="space-y-7 max-w-lg"
            >
              <p className="font-body text-sm md:text-base text-cream/60 leading-[1.9]">
                Since 2015, Tim has built MOM Homes on a single belief: that a home should be a
                true expression of the person who lives in it.
              </p>
              <p className="font-body text-sm md:text-base text-cream/60 leading-[1.9]">
                With a hands-on approach and an uncompromising eye for detail, Tim leads every
                project from the first conversation to the final finish.
              </p>
              <p className="font-body text-sm md:text-base text-muted leading-[1.9]">
                This is not production building. It is a practice — and it shows in every home
                MOM Homes has ever delivered.
              </p>
            </motion.div>

            {/* Animated divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="mt-14 flex items-center gap-5"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
                className="h-px w-12 bg-gold/40 origin-left"
              />
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">
                Vancouver &amp; Burnaby · Est. 2015
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
