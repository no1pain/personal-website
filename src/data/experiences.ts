export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  businessValue: string
  impact: string[]
  engineering: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Neteject AB',
    role: 'Frontend Developer',
    period: 'Apr 2025 – May 2026',
    location: 'Remote',
    businessValue: 'Developed frontend architecture and core features across three startup projects using React, Next.js, TypeScript, and Tailwind CSS.',
    impact: [
      'Developed frontend architecture and core features across three startup projects',
      'Built applications using React, Next.js, TypeScript, and Tailwind CSS',
      'Implemented authentication and authorization for user security',
      'Built real-time features using Supabase Realtime and WebSockets',
      'Collaborated with backend (NestJS) and mobile (Flutter) teams',
    ],
    engineering: [
      'Worked on PostgreSQL schema design',
      'Implemented Row-Level Security (RLS)',
      'Optimized database queries',
      'Integrated Supabase Realtime for live data synchronization',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'WebSockets', 'NestJS', 'Flutter'],
  },
  {
    company: 'Insiders',
    role: 'Frontend Developer',
    period: 'Oct 2024 – May 2025',
    businessValue: 'Developed frontend features for a banking platform, including authentication and multi-currency card transactions.',
    impact: [
      'Developed frontend features for a banking platform',
      'Built authentication features',
      'Implemented multi-currency card transactions',
      'Integrated REST APIs',
      'Focused on performance and usability',
      'Collaborated with backend and product teams',
    ],
    engineering: [
      'Implemented authentication flows',
      'Built transaction interfaces',
      'Integrated REST APIs',
    ],
    technologies: ['React', 'TypeScript', 'REST APIs', 'Authentication'],
  },
]
