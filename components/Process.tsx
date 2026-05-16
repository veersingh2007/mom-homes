'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.32, 0.72, 0, 1] as const;

/* ── Architectural SVG drawings ─────────────────────────────────────────── */

function ConversationSVG() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" className="w-full h-full">
      {/* Concentric ripple rings — voice / resonance / listening */}
      <circle cx="150" cy="150" r="12"  strokeWidth="1.4" />
      <circle cx="150" cy="150" r="42"  strokeWidth="1.0" />
      <circle cx="150" cy="150" r="74"  strokeWidth="0.7" />
      <circle cx="150" cy="150" r="106" strokeWidth="0.5" />
      <circle cx="150" cy="150" r="138" strokeWidth="0.3" />
      {/* Cardinal tick marks */}
      <line x1="150" y1="8"   x2="150" y2="18"  strokeWidth="0.7" />
      <line x1="292" y1="150" x2="282" y2="150" strokeWidth="0.7" />
      <line x1="150" y1="292" x2="150" y2="282" strokeWidth="0.7" />
      <line x1="8"   y1="150" x2="18"  y2="150" strokeWidth="0.7" />
      {/* Centre dot */}
      <circle cx="150" cy="150" r="4" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

function DesignSVG() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" className="w-full h-full">
      {/* Faint grid */}
      {[70, 110, 150, 190, 230].map(x => (
        <line key={`v${x}`} x1={x} y1="45" x2={x} y2="265" strokeWidth="0.22" strokeDasharray="2 7" />
      ))}
      {[80, 120, 160, 200, 240].map(y => (
        <line key={`h${y}`} x1="45" y1={y} x2="265" y2={y} strokeWidth="0.22" strokeDasharray="2 7" />
      ))}
      {/* Outer wall — double line */}
      <rect x="48" y="68" width="204" height="164" strokeWidth="2.8" />
      <rect x="56" y="76" width="188" height="148" strokeWidth="0.5" />
      {/* Interior wall */}
      <line x1="160" y1="76"  x2="160" y2="178" strokeWidth="2.5" />
      <line x1="168" y1="76"  x2="168" y2="178" strokeWidth="0.5" />
      {/* Door swing (right room) */}
      <line x1="168" y1="178" x2="200" y2="178" strokeWidth="0.8" />
      <path d="M 168 178 A 32 32 0 0 0 200 210" strokeWidth="0.6" strokeDasharray="3 2" />
      {/* Window — left wall */}
      <line x1="48"  y1="118" x2="56"  y2="118" strokeWidth="0.7" />
      <line x1="48"  y1="152" x2="56"  y2="152" strokeWidth="0.7" />
      <line x1="48"  y1="135" x2="56"  y2="135" strokeWidth="1.8" />
      {/* Window — top wall */}
      <line x1="88"  y1="68" x2="88"  y2="76" strokeWidth="0.7" />
      <line x1="128" y1="68" x2="128" y2="76" strokeWidth="0.7" />
      <line x1="108" y1="68" x2="108" y2="76" strokeWidth="1.8" />
      {/* Dimension line */}
      <line x1="48"  y1="258" x2="252" y2="258" strokeWidth="0.5" />
      <line x1="48"  y1="252" x2="48"  y2="264" strokeWidth="0.5" />
      <line x1="252" y1="252" x2="252" y2="264" strokeWidth="0.5" />
      <line x1="150" y1="258" x2="150" y2="270" strokeWidth="0.4" strokeDasharray="2 3" />
    </svg>
  );
}

function BuildSVG() {
  return (
    <svg viewBox="0 0 300 280" fill="none" stroke="currentColor" className="w-full h-full">
      {/* Ground lines */}
      <line x1="18"  y1="248" x2="282" y2="248" strokeWidth="1.3" />
      <line x1="18"  y1="253" x2="282" y2="253" strokeWidth="0.4" />
      {/* Foundation */}
      <rect x="52" y="230" width="196" height="18" strokeWidth="0.9" />
      {/* Left wall */}
      <rect x="52" y="126" width="18" height="104" strokeWidth="0.9" />
      {/* Right wall */}
      <rect x="230" y="126" width="18" height="104" strokeWidth="0.9" />
      {/* Wall hatch — left */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`lh${i}`} x1={54} y1={133 + i * 12} x2={68} y2={121 + i * 12} strokeWidth="0.4" />
      ))}
      {/* Wall hatch — right */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`rh${i}`} x1={232} y1={133 + i * 12} x2={246} y2={121 + i * 12} strokeWidth="0.4" />
      ))}
      {/* Floor slab */}
      <rect x="52" y="188" width="196" height="8" strokeWidth="0.9" />
      {/* Floor hatch */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={`fh${i}`} x1={54 + i * 20} y1={188} x2={54 + i * 20 + 6} y2={196} strokeWidth="0.35" />
      ))}
      {/* Roof — gable */}
      <polyline points="40,126 150,50 260,126" strokeWidth="1.0" />
      <line x1="40" y1="126" x2="260" y2="126" strokeWidth="0.9" />
      {/* Ridge plumb line */}
      <line x1="150" y1="50" x2="150" y2="72" strokeWidth="0.5" strokeDasharray="3 2" />
      {/* Windows */}
      <rect x="78"  y="140" width="48" height="36" strokeWidth="0.9" />
      <line x1="102" y1="140" x2="102" y2="176" strokeWidth="0.5" />
      <rect x="174" y="140" width="48" height="36" strokeWidth="0.9" />
      <line x1="198" y1="140" x2="198" y2="176" strokeWidth="0.5" />
      {/* Door */}
      <rect x="124" y="196" width="52" height="40" strokeWidth="0.9" />
      <path d="M 150 196 A 26 26 0 0 1 176 196" strokeWidth="0.5" strokeDasharray="2 2" />
      {/* Eave drip line */}
      <line x1="40" y1="130" x2="40" y2="136" strokeWidth="0.5" />
      <line x1="260" y1="130" x2="260" y2="136" strokeWidth="0.5" />
    </svg>
  );
}

function HandoverSVG() {
  return (
    <svg viewBox="0 0 340 240" fill="none" stroke="currentColor" className="w-full h-full">
      {/* Key bow — three concentric circles */}
      <circle cx="112" cy="120" r="78" strokeWidth="0.8" />
      <circle cx="112" cy="120" r="54" strokeWidth="0.7" />
      <circle cx="112" cy="120" r="28" strokeWidth="1.3" />
      {/* Cross hairlines inside bow */}
      <line x1="112" y1="66"  x2="112" y2="174" strokeWidth="0.45" />
      <line x1="58"  y1="120" x2="166" y2="120" strokeWidth="0.45" />
      {/* Diagonal hairlines */}
      <line x1="73"  y1="81"  x2="151" y2="159" strokeWidth="0.3" />
      <line x1="151" y1="81"  x2="73"  y2="159" strokeWidth="0.3" />
      {/* Shaft — top and bottom edges */}
      <line x1="188" y1="106" x2="320" y2="106" strokeWidth="1.4" />
      <line x1="188" y1="134" x2="308" y2="134" strokeWidth="1.4" />
      {/* Shaft end cap */}
      <line x1="308" y1="106" x2="308" y2="134" strokeWidth="1.4" />
      {/* Tooth 1 */}
      <line x1="218" y1="134" x2="218" y2="162" strokeWidth="1.4" />
      <line x1="218" y1="162" x2="240" y2="162" strokeWidth="1.4" />
      <line x1="240" y1="134" x2="240" y2="162" strokeWidth="1.4" />
      {/* Tooth 2 */}
      <line x1="255" y1="134" x2="255" y2="152" strokeWidth="1.4" />
      <line x1="255" y1="152" x2="275" y2="152" strokeWidth="1.4" />
      <line x1="275" y1="134" x2="275" y2="152" strokeWidth="1.4" />
    </svg>
  );
}

/* ── Step data ──────────────────────────────────────────────────────────── */

const steps = [
  {
    num:   '01',
    title: 'The Conversation',
    desc:  'We begin by listening. Your vision, your life, your land — understood before a single line is drawn.',
    col:   'md:col-span-7',
    Svg:   ConversationSVG,
  },
  {
    num:   '02',
    title: 'The Design',
    desc:  'Concept meets craft. Every detail is drawn with purpose, every space imagined with intention.',
    col:   'md:col-span-5',
    Svg:   DesignSVG,
  },
  {
    num:   '03',
    title: 'The Build',
    desc:  'Tim and the team bring the plans to life, precisely as envisioned — on time, without compromise.',
    col:   'md:col-span-5',
    Svg:   BuildSVG,
  },
  {
    num:   '04',
    title: 'The Handover',
    desc:  'Your home, finished to the last detail. No corners cut. No afterthoughts. Just the home you imagined.',
    col:   'md:col-span-7',
    Svg:   HandoverSVG,
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

export default function Process() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="process" ref={ref} className="bg-bg py-32 md:py-44 px-6 md:px-12 lg:px-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: EASE }}
        className="mb-16 md:mb-20"
      >
        <p className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-5">
          How We Work
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream italic leading-none">
          From Vision<br />to Foundation
        </h2>
      </motion.div>

      {/* Bento grid — [7|5] top row, [5|7] bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {steps.map((step, i) => {
          const { Svg } = step;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -14, backgroundColor: '#1F1912', transition: { duration: 0.4, ease: EASE } }}
              transition={{ duration: 0.75, delay: 0.08 + i * 0.1, ease: EASE }}
              className={`${step.col} group relative overflow-hidden rounded-[2px]
                bg-surface border border-cream/6
                min-h-[340px] md:min-h-[400px]
                flex flex-col justify-between
                p-8 md:p-10 cursor-default`}
            >
              {/* Architectural drawing — ghost, intensifies on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center p-6 md:p-10
                  text-gold pointer-events-none select-none
                  opacity-20 group-hover:opacity-60
                  scale-100 group-hover:scale-[1.06]
                  transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <Svg />
              </div>

              {/* Gold left-border lift */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold
                  scale-y-0 group-hover:scale-y-100 origin-top
                  transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />

              {/* Bezel */}
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/6 rounded-[2px] pointer-events-none z-10" />

              {/* Step number */}
              <span className="relative z-10 font-body text-[10px] tracking-[0.28em] text-gold/60
                group-hover:text-gold transition-colors duration-500">
                {step.num}
              </span>

              {/* Title + desc */}
              <div className="relative z-10">
                <h3 className="font-display text-3xl md:text-4xl text-cream italic leading-tight mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-[1.85] max-w-xs
                  group-hover:text-cream/55 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
