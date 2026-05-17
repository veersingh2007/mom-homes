import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import projectData from '@/lib/projectData';
import ProjectDetail from '@/components/ProjectDetail';

type Props = { params: Promise<{ slug: string }> };

const PREFIX_ORDER = ['exterior', 'interior', 'during', 'before'];

function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', slug);
  try {
    return fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => {
        const ai = PREFIX_ORDER.findIndex(p => a.toLowerCase().startsWith(p));
        const bi = PREFIX_ORDER.findIndex(p => b.toLowerCase().startsWith(p));
        const ao = ai === -1 ? 99 : ai;
        const bo = bi === -1 ? 99 : bi;
        return ao !== bo ? ao - bo : a.localeCompare(b);
      })
      .map(f => `/images/${slug}/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  return Object.keys(projectData).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return {};
  return {
    title:       `${project.name} | MOM Homes`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) notFound();
  const images = getProjectImages(slug);
  return <ProjectDetail project={project} images={images} />;
}
