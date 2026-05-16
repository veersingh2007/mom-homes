'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.32, 0.72, 0, 1] as const;

const services = [
  { num: '01', name: 'Custom Homes',  desc: 'Conceived from nothing, built around everything you are.' },
  { num: '02', name: 'Renovations',   desc: 'Transforming what exists into what you always imagined.' },
  { num: '03', name: 'Laneway Homes', desc: 'Compact in footprint. Expansive in design.'              },
  { num: '04', name: 'Mansions',      desc: 'Residences of rare scale, crafted without compromise.'   },
  { num: '05', name: 'Country Homes', desc: 'Quiet retreats built for permanence and peace.'          },
];

export default function Services() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="services" ref={ref} className="relative bg-bg py-32 md:py-44 overflow-hidden">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-5">
              What We Build
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-none italic">
              The Art<br />of Building
            </h2>
          </div>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted pb-1">
            Five distinct services
          </p>
        </motion.div>
      </div>

      {/* Bottom dissolve */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      {/* Service rows — full bleed edge-to-edge */}
      <div>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease: EASE }}
            className="group relative border-t border-cream/6 last:border-b cursor-default"
          >
            {/* Gold left accent — grows down on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold
                scale-y-0 group-hover:scale-y-100 origin-top
                transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            />

            <div
              className="px-6 md:px-12 lg:px-16 py-9 md:py-12
                grid grid-cols-12 items-center gap-4
                transition-colors duration-500 group-hover:bg-[#120F0B]"
            >
              {/* Number */}
              <span
                className="col-span-2 md:col-span-1
                  font-body text-[10px] tracking-[0.25em] text-gold/50
                  group-hover:text-gold transition-colors duration-500"
              >
                {s.num}
              </span>

              {/* Service name */}
              <h3
                className="col-span-10 md:col-span-6 lg:col-span-5
                  font-display text-4xl md:text-5xl lg:text-[3.5rem] text-cream italic leading-none"
              >
                {s.name}
              </h3>

              {/* Description — desktop hover reveal */}
              <p
                className="hidden md:block md:col-span-5 lg:col-span-6
                  font-body text-sm text-muted leading-[1.85]
                  opacity-0 translate-x-5
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
