import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | MOM Homes — Custom Home Builder Vancouver & Burnaby',
  description:
    'Browse the full portfolio of MOM Homes — custom homes, renovations, laneway homes, mansions, and country homes built across Vancouver and Burnaby since 2015.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
