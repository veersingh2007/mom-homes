export type ProjectPhoto = { src: string; alt: string };

export type ProjectData = {
  slug:        string;
  name:        string;
  type:        string;
  location:    string;
  year:        string;
  description: string;
  mainImage:   string;
  before:      ProjectPhoto[];
  during:      ProjectPhoto[];
  after:       ProjectPhoto[];
};

const projectData: Record<string, ProjectData> = {
  'country-home': {
    slug:        'country-home',
    name:        'Country Home',
    type:        'Custom Home',
    location:    'West Vancouver',
    year:        '2023',
    description: 'A refined country retreat built for a family seeking permanence and calm. Designed to sit naturally within its landscape, this home balances warm materiality with a considered, open-plan interior — every room oriented toward the surrounding nature.',
    mainImage:   '/images/Main 1.jpg',
    before:      [],
    during:      [],
    after:       [{ src: '/images/Main 1.jpg', alt: 'Country Home — completed' }],
  },
  'modern': {
    slug:        'modern',
    name:        'Modern',
    type:        'Custom Home',
    location:    'Burnaby',
    year:        '2022',
    description: 'A clean-lined modern residence that prioritises light, flow, and material integrity. Every detail was resolved with precision — from the structural expression to the custom millwork — delivering a home that is quietly extraordinary.',
    mainImage:   '/images/Main 2.jpeg',
    before:      [],
    during:      [],
    after:       [{ src: '/images/Main 2.jpeg', alt: 'Modern — completed' }],
  },
  'international-modern': {
    slug:        'international-modern',
    name:        'International Modern',
    type:        'Mansion',
    location:    'Vancouver',
    year:        '2023',
    description: 'An expansive residence informed by international modernist principles — flat rooflines, generous glazing, and a seamless relationship between interior and garden. Built without compromise for a client who understood exactly what they wanted.',
    mainImage:   '/images/Main 3.jpg',
    before:      [],
    during:      [],
    after:       [{ src: '/images/Main 3.jpg', alt: 'International Modern — completed' }],
  },
  'contemporary': {
    slug:        'contemporary',
    name:        'Contemporary',
    type:        'Custom Home',
    location:    'Vancouver',
    year:        '2022',
    description: 'A contemporary residence defined by clean geometry, curated materials, and a considered approach to light. Designed to feel both generous and grounded, this home balances openness with warmth — a modern standard built to last generations.',
    mainImage:   '/images/Main 4.jpeg',
    before:      [],
    during:      [],
    after:       [{ src: '/images/Main 4.jpeg', alt: 'Contemporary — completed' }],
  },
  'vancouver-standard': {
    slug:        'vancouver-standard',
    name:        'Vancouver Standard',
    type:        'Renovation',
    location:    'Burnaby',
    year:        '2024',
    description: 'A complete transformation of a classic Vancouver home. Stripped back and rebuilt from the inside out, the result honours the character of its streetscape while delivering a thoroughly modern interior — one that feels entirely new.',
    mainImage:   '/images/Main 5.jpeg',
    before:      [],
    during:      [],
    after:       [{ src: '/images/Main 5.jpeg', alt: 'Vancouver Standard — completed' }],
  },
};

export default projectData;
