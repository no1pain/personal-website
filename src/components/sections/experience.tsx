import { Container } from '@/components/layout/container'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { CaseStudyCard } from '@/components/features/experience/case-study-card'

export function Experience() {
  const experiences = [
    {
      company: 'TechCorp',
      role: 'Senior Frontend Engineer',
      period: '2023 – Present',
      businessValue: 'Led the migration of the legacy monolithic frontend to a micro-frontend architecture, reducing build times by 60% and enabling independent team deployments.',
      impact: [
        'Reduced page load time from 3.2s to 1.1s through performance optimization',
        'Implemented design system adoption across 4 product teams, improving development velocity by 40%',
        'Mentored 3 junior engineers, with 2 promoted to mid-level within 8 months',
      ],
      engineering: [
        'Architected module federation setup with Webpack 5 for code sharing between micro-frontends',
        'Built custom CI/CD pipeline with incremental builds and smart caching strategies',
        'Established comprehensive testing strategy with 85%+ coverage across critical paths',
      ],
      technologies: ['React 18', 'TypeScript', 'Next.js 14', 'Webpack 5', 'Module Federation', 'Jest', 'Playwright'],
    },
    {
      company: 'StartupXYZ',
      role: 'Frontend Engineer',
      period: '2021 – 2023',
      businessValue: 'Built the core product from scratch, scaling from 0 to 50,000 active users with 99.9% uptime during peak traffic events.',
      impact: [
        'Shipped MVP in 8 weeks, enabling $500K in seed funding',
        'Implemented real-time collaboration features serving 10,000+ concurrent users',
        'Reduced customer support tickets by 35% through intuitive UX improvements',
      ],
      engineering: [
        'Designed state management architecture using React Query for server state and Zustand for client state',
        'Implemented optimistic UI updates and conflict resolution for real-time features',
        'Built comprehensive error boundaries and monitoring with Sentry integration',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'React Query', 'Zustand', 'Socket.io', 'PostgreSQL', 'Sentry'],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <Container size="6xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl">
            <Heading level={2} className="text-4xl">
              Experience
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              Case studies of products I've built and the engineering decisions behind them.
            </Text>
          </div>

          {/* Experience Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <CaseStudyCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
