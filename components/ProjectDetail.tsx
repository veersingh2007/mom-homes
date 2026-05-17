'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { ProjectData } from '@/lib/projectData';

const EASE = [0.32, 0.72, 0, 1] as const;


export default function ProjectDetail({
  project,
  images,
}: {
  project: ProjectData;
  images:  string[];
}) {
  return (
    <main className="bg-bg text-cream font-body">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden flex items-end">
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-cream italic leading-none"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Description + back link ── */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
            className="font-body text-base md:text-lg text-cream/55 leading-[1.9] max-w-xl"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3
                font-body text-[10px] tracking-[0.25em] uppercase
                text-cream/30 hover:text-gold transition-colors duration-300"
            >
              <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
              All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        {images.length === 0 ? (
          /* Empty state */
          <div className="border-t border-cream/6 pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[0, 1, 2].map(i => (
              <div key={i} className="aspect-[4/3] rounded-[2px] border border-cream/8
                flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-px bg-gold/30" />
                <p className="font-body text-[9px] tracking-[0.28em] uppercase text-cream/20">
                  Photos coming soon
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-cream/6 pt-16 space-y-3">
            {/* First image — full width cinematic */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.75, ease: EASE }}
            >
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2px]">
                <Image
                  src={images[0]}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/8 rounded-[2px]" />
              </div>
            </motion.div>

            {/* Remaining images — 2-column grid */}
            {images.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {images.slice(1).map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8%' }}
                    transition={{ duration: 0.75, delay: (i % 2) * 0.08, ease: EASE }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                      <Image
                        src={src}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-cream/8 rounded-[2px]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
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
            <h2 className="font-display text-5xl md:text-6xl text-cream italic leading-none">
              Start Your<br />Own Story
            </h2>
          </div>
          <Link
            href="/#consultation"
            className="group inline-flex items-center gap-4 shrink-0
              border border-gold/30 hover:border-gold
              px-7 py-4 rounded-[2px]
              font-body text-[10px] tracking-[0.3em] uppercase text-gold
              transition-all duration-500 hover:bg-gold/5"
          >
            <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
            Book a Consultation
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
