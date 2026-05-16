'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const EASE = [0.32, 0.72, 0, 1] as const;

const inputClass = `
  w-full bg-white/[0.06] border border-white/[0.12] rounded-[2px]
  font-body text-base text-cream placeholder:text-cream/40
  px-4 py-4 outline-none resize-none
  focus:border-gold/60 focus:bg-white/[0.10]
  transition-all duration-300
`.trim();

const labelClass = `
  block font-body text-[11px] tracking-[0.22em] uppercase text-cream/55 mb-2.5
`.trim();

export default function Consultation() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [sent, setSent] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="consultation"
      ref={ref}
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-12 lg:px-16"
    >
      {/* Parallax background photo */}
      <motion.div className="absolute inset-0 scale-[1.2]" style={{ y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&auto=format&fit=crop&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </motion.div>

      {/* Layered overlays — dark top/bottom, lighter centre so photo breathes through */}
      <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(196,164,85,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-body text-[10px] tracking-[0.32em] uppercase text-gold mb-10 text-center"
        >
          Let&apos;s Build Together
        </motion.p>

        {/* Headline — clip reveal */}
        <div className="overflow-hidden mb-8 text-center">
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
            className="font-display text-6xl md:text-7xl lg:text-[6rem] text-cream italic leading-tight"
          >
            Your Home<br />Awaits
          </motion.h2>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
          className="h-px w-16 bg-gold/40 mx-auto mb-10 origin-center"
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          className="font-body text-sm text-cream/38 leading-[1.8] mb-14 max-w-sm mx-auto text-center"
        >
          Every extraordinary home begins with a single conversation.
          <br />Let&apos;s have yours.
        </motion.p>

        {/* ── Glass contact form ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="relative rounded-[3px] overflow-hidden
            bg-gradient-to-b from-white/[0.09] to-white/[0.05]
            backdrop-blur-2xl
            border border-white/[0.13]
            shadow-[0_12px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]
            p-5 sm:p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="py-14 text-center"
              >
                {/* Animated gold ring */}
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-8">
                  <div className="w-4 h-4 rounded-full bg-gold/50" />
                </div>
                <p className="font-display text-4xl md:text-5xl text-cream italic mb-5">
                  Thank you.
                </p>
                <p className="font-body text-sm text-cream/40 leading-[1.9] max-w-xs mx-auto">
                  Tim will be in touch shortly. Every great home begins exactly like this.
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 — Phone + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Phone&nbsp;
                      <span className="normal-case tracking-normal text-cream/25">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="604 · · ·"
                      className={inputClass}
                    />
                  </div>
                  <div className="relative">
                    <label className={labelClass}>Service</label>
                    <select
                      className={`${inputClass} appearance-none cursor-pointer text-cream/60`}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0D0A07] text-cream/40">Select a service</option>
                      <option value="custom"     className="bg-[#0D0A07] text-cream">Custom Home</option>
                      <option value="renovation" className="bg-[#0D0A07] text-cream">Renovation</option>
                      <option value="laneway"    className="bg-[#0D0A07] text-cream">Laneway Home</option>
                      <option value="mansion"    className="bg-[#0D0A07] text-cream">Mansion</option>
                      <option value="country"    className="bg-[#0D0A07] text-cream">Country Home</option>
                    </select>
                    {/* Custom chevron */}
                    <div className="absolute right-4 top-[calc(50%+8px)] -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1" className="text-cream/30" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 3 — Message */}
                <div>
                  <label className={labelClass}>Tell Us About Your Vision</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, your land, your timeline…"
                    className={inputClass}
                  />
                </div>

                {/* Row 4 — Privacy note + Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2">
                  <p className="font-body text-xs text-cream/35 leading-[1.8] max-w-[220px]">
                    Your information is kept private and never shared.
                  </p>
                  <button type="submit" className="group inline-flex items-center shrink-0">
                    <span className="mr-3 w-5 h-5 rounded-full border border-gold/50
                      flex items-center justify-center shrink-0
                      transition-colors duration-500 group-hover:border-gold">
                      <span className="w-[7px] h-[7px] rounded-full border border-gold/50
                        transition-all duration-500 group-hover:border-gold group-hover:bg-gold/40" />
                    </span>
                    <span className="bg-surface border border-gold/25 text-cream/85
                      font-body text-xs md:text-sm tracking-[0.22em] uppercase
                      px-8 py-4 rounded-[3px]
                      transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                      group-hover:bg-gold/10 group-hover:border-gold/55 group-hover:text-cream">
                      Send Enquiry
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Direct contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href="tel:+16047165688"
            className="font-body text-[10px] tracking-[0.22em] uppercase
              text-cream/25 hover:text-gold transition-colors duration-300"
          >
            604 · 716 · 5688
          </a>
          <div className="w-px h-3 bg-cream/15" />
          <a
            href="mailto:info@momhomes.ca"
            className="font-body text-[10px] tracking-[0.22em] uppercase
              text-cream/25 hover:text-gold transition-colors duration-300"
          >
            info@momhomes.ca
          </a>
        </motion.div>
      </div>
    </section>
  );
}
