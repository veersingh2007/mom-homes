import Image from 'next/image';

const navLinks = [
  { label: 'Work',     href: '#projects'     },
  { label: 'Services', href: '#services'     },
  { label: 'About',    href: '#about'        },
  { label: 'Process',  href: '#process'      },
  { label: 'Contact',  href: '#consultation' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg px-6 md:px-12 lg:px-16 py-16 md:py-20 overflow-hidden">

      {/* Top fade — dissolves into section above */}
      <div className="absolute top-0 inset-x-0 h-px bg-cream/[0.06]" />

      {/* Ghost watermark */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-x-[12%] translate-y-[35%]
          font-display leading-none select-none pointer-events-none
          text-[14vw] text-cream/[0.025] whitespace-nowrap"
      >
        MOM HOMES
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center
          justify-between gap-10 mb-14 pb-14 border-b border-cream/5">

          {/* Logo */}
          <Image
            src="/mh-logo.png"
            alt="MOM Homes Inc"
            width={110}
            height={48}
            className="h-9 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity duration-500"
          />

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-[10px] tracking-[0.22em] uppercase
                  text-muted hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <a
              href="tel:+16047165688"
              className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-300 text-right"
            >
              604 · 716 · 5688
            </a>
            <a
              href="mailto:info@momhomes.ca"
              className="font-body text-xs text-muted hover:text-gold transition-colors duration-300 text-right"
            >
              info@momhomes.ca
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-sm italic text-muted">
            Crafting Vancouver&apos;s most distinguished addresses since 2015.
          </p>
          <p className="font-body text-[10px] tracking-[0.15em] text-muted/50">
            © {year} MOM Homes Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
