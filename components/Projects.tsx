'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const EASE = [0.32, 0.72, 0, 1] as const;

const projects = [
  {
    name:     'Country Home',
    type:     'Custom Home',
    location: 'West Vancouver',
    year:     '2023',
    col:      'lg:col-span-12',
    aspect:   '21 / 9',
    image:    '/images/Main%201.jpg',
    sizes:    '100vw',
  },
  {
    name:     'Modern',
    type:     'Custom Home',
    location: 'Burnaby',
    year:     '2022',
    col:      'lg:col-span-5',
    aspect:   '4 / 3',
    image:    '/images/Main%202.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 42vw',
  },
  {
    name:     'International Modern',
    type:     'Mansion',
    location: 'Vancouver',
    year:     '2023',
    col:      'lg:col-span-7',
    aspect:   '4 / 3',
    image:    '/images/Main%203.jpg',
    sizes:    '(max-width: 1024px) 100vw, 58vw',
  },
  {
    name:     'Contemporary',
    type:     'Laneway Home',
    location: 'Vancouver',
    year:     '2022',
    col:      'lg:col-span-7',
    aspect:   '4 / 3',
    image:    '/images/Main%204.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 58vw',
  },
  {
    name:     'Vancouver Standard',
    type:     'Renovation',
    location: 'Burnaby',
    year:     '2024',
    col:      'lg:col-span-5',
    aspect:   '4 / 3',
    image:    '/images/Main%205.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 42vw',
  },
];

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <section id="projects" ref={ref} className="relative bg-bg py-32 md:py-44 px-6 md:px-12 lg:px-16">

      {/* Top + bottom dissolves */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-bg to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: EASE }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
      >
        <div>
          <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-5">
            Selected Work
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream italic leading-none">
            Homes<br />We Have Built
          </h2>
        </div>
        <a
          href="#consultation"
          className="group font-body text-[10px] tracking-[0.22em] uppercase
            text-cream/35 hover:text-gold transition-colors duration-500
            self-start md:self-end shrink-0 inline-flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
          Start a Project
        </a>
      </motion.div>

      {/* Editorial grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.06 + i * 0.1, ease: EASE }}
            className={`${p.col} group relative overflow-hidden rounded-[2px] ${
              i === 0 ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]' : ''
            }`}
            style={i === 0 ? undefined : { aspectRatio: p.aspect }}
          >
            {/* Bezel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/8 rounded-[2px] z-20 pointer-events-none" />

            {/* Photo */}
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover transition-transform duration-[1200ms]
                ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
              sizes={p.sizes}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/20 to-transparent z-10" />

            {/* Gold left-border on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold z-30
                scale-y-0 group-hover:scale-y-100 origin-bottom
                transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            />

            {/* Info */}
            <div
              className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8
                translate-y-2 group-hover:translate-y-0
                transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/80 mb-2">
                {p.type} &nbsp;·&nbsp; {p.location}
              </p>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl text-cream italic">
                  {p.name}
                </h3>
                <span className="font-body text-[10px] text-cream/30 shrink-0">{p.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.7, ease: EASE }}
        className="mt-10 flex items-center justify-between border-t border-cream/[0.06] pt-8"
      >
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-muted/50">
          Showing 5 of 10 projects
        </span>
        <a
          href="/projects"
          className="group inline-flex items-center gap-4
            border border-gold/30 hover:border-gold
            px-6 py-3.5 rounded-[2px]
            font-body text-[10px] tracking-[0.28em] uppercase text-gold
            transition-all duration-500 hover:bg-gold/5"
        >
          <span className="h-px w-5 bg-gold transition-all duration-500 group-hover:w-8" />
          View All Work
        </a>
      </motion.div>
    </section>
  );
}
