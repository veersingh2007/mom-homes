'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const EASE = [0.32, 0.72, 0, 1] as const;

/* ── Project data ──────────────────────────────────────────────────────── */

const allProjects = [
  {
    id:       1,
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
    id:       2,
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
    id:       3,
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
    id:       4,
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
    id:       5,
    name:     'Vancouver Standard',
    type:     'Renovation',
    location: 'Burnaby',
    year:     '2024',
    col:      'lg:col-span-5',
    aspect:   '4 / 3',
    image:    '/images/Main%205.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 42vw',
  },
  {
    id:       6,
    name:     'MOM Homes',
    type:     'Custom Home',
    location: 'West Vancouver',
    year:     '2024',
    col:      'lg:col-span-6',
    aspect:   '4 / 3',
    image:    '/images/2B4CD17C-C60A-4501-A075-1EAE5AF331F8.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 50vw',
  },
  {
    id:       7,
    name:     'MOM Homes',
    type:     'Custom Home',
    location: 'West Vancouver',
    year:     '2021',
    col:      'lg:col-span-6',
    aspect:   '4 / 3',
    image:    '/images/D3799B8B-B4A0-4B4F-BE77-00F420EFC1A2.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 50vw',
  },
  {
    id:       8,
    name:     'MOM Homes',
    type:     'Custom Home',
    location: 'Vancouver',
    year:     '2023',
    col:      'lg:col-span-4',
    aspect:   '4 / 3',
    image:    '/images/E52CFBBB-A83B-437D-9047-4AB6F0222791.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 33vw',
  },
  {
    id:       9,
    name:     'MOM Homes',
    type:     'Custom Home',
    location: 'Burnaby',
    year:     '2024',
    col:      'lg:col-span-4',
    aspect:   '4 / 3',
    image:    '/images/IMG_4511.jpeg',
    sizes:    '(max-width: 1024px) 100vw, 33vw',
  },
  {
    id:       10,
    name:     'MOM Homes',
    type:     'Custom Home',
    location: 'Vancouver',
    year:     '2021',
    col:      'lg:col-span-4',
    aspect:   '4 / 3',
    image:    '/images/image.jpg',
    sizes:    '(max-width: 1024px) 100vw, 33vw',
  },
];

const FILTERS = ['All', 'Custom Homes', 'Renovations', 'Laneway Homes', 'Mansions', 'Country Homes'];

const TYPE_MAP: Record<string, string> = {
  'Custom Homes':  'Custom Home',
  'Renovations':   'Renovation',
  'Laneway Homes': 'Laneway Home',
  'Mansions':      'Mansion',
  'Country Homes': 'Country Home',
};

/* ── Project card ──────────────────────────────────────────────────────── */

function ProjectCard({
  p, i, uniform,
}: {
  p: typeof allProjects[0];
  i: number;
  uniform: boolean;
}) {
  return (
    <motion.div
      key={p.id}
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
      className={`${uniform ? 'col-span-1' : p.col} group relative overflow-hidden rounded-[2px] ${
        p.id === 1 && !uniform ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]' : ''
      } ${uniform ? 'aspect-[4/3]' : ''}`}
      style={p.id === 1 || uniform ? undefined : { aspectRatio: p.aspect }}
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
        sizes={uniform ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' : p.sizes}
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
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.type === TYPE_MAP[activeFilter]);

  const isUniform = activeFilter !== 'All';

  return (
    <main className="bg-bg text-cream font-body">
      <Nav />

      {/* ── Page header ─────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-28 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">

        {/* Ghost watermark */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display leading-none select-none pointer-events-none
            text-[18vw] text-cream/[0.025] whitespace-nowrap"
        >
          OUR WORK
        </span>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-6">
              Portfolio · {allProjects.length} Projects
            </p>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-cream italic leading-none mb-8">
              Every Home,<br />A Story
            </h1>
            <p className="font-body text-sm text-muted leading-[1.85] max-w-sm">
              A decade of bespoke construction across Vancouver and Burnaby — each project a collaboration between vision and craft.
            </p>
          </motion.div>
        </div>

        {/* Bottom dissolve */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* ── Filter bar ──────────────────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 bg-bg/90 backdrop-blur-md border-b border-cream/5 px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative shrink-0 font-body text-[9px] tracking-[0.25em] uppercase
                px-4 py-2 rounded-[2px] cursor-pointer
                transition-colors duration-300
                ${activeFilter === f
                  ? 'text-gold'
                  : 'text-muted hover:text-cream/60'
                }`}
            >
              {f}
              {activeFilter === f && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 font-body text-[9px] tracking-[0.2em] uppercase text-muted/50">
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-3 ${
              isUniform
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 lg:grid-cols-12'
            }`}
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} uniform={isUniform} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-2xl italic text-muted text-center py-32"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </section>

      {/* ── CTA strip ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: EASE }}
          className="border-t border-cream/6 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-5">
              Begin Yours
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream italic leading-none">
              Your Home<br />Awaits
            </h2>
          </div>
          <a
            href="/#consultation"
            className="group inline-flex items-center gap-4 shrink-0
              border border-gold/30 hover:border-gold
              px-7 py-4 rounded-[2px]
              font-body text-[10px] tracking-[0.3em] uppercase text-gold
              transition-all duration-500 hover:bg-gold/5"
          >
            <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
            Book a Consultation
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
