import { Container } from '@/components/layout/container'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { EngineeringCaseStudy } from '@/components/features/case-studies/engineering-case-study'

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'Real-time State Synchronization',
      challenge: 'Building a collaborative document editor where multiple users could edit simultaneously required handling complex conflict resolution, ensuring eventual consistency across all clients, and maintaining performance with 10,000+ concurrent connections.',
      constraints: [
        'Network latency could be up to 500ms for some users',
        'Clients could go offline unexpectedly',
        'Mobile devices had limited memory and CPU',
        'Server needed to handle 10,000+ WebSocket connections',
      ],
      solution: 'Implemented Operational Transformation (OT) algorithm with a central authority server. Each operation was transformed against concurrent operations before application. Used CRDT-inspired conflict resolution for offline edits with automatic reconciliation on reconnection. Implemented exponential backoff for reconnection attempts and operation batching to reduce network overhead.',
      tradeoffs: [
        'OT algorithm increased initial complexity and development time by 3 weeks',
        'Central authority server became a single point of failure (mitigated with hot standby)',
        'Operation history grew unbounded (solved with periodic compaction)',
        'Mobile clients received simplified conflict UI due to screen constraints',
      ],
      outcome: 'Achieved 99.9% consistency across concurrent edits with sub-100ms conflict resolution. System handled 12,000 concurrent connections during peak usage. Offline mode worked seamlessly with automatic merge on reconnection, reducing user frustration during network issues.',
    },
    {
      title: 'Micro-frontend Build Optimization',
      challenge: 'A monolithic frontend codebase had grown to 2MB bundle size with 8-minute build times, slowing down development velocity and causing poor initial load performance. The team needed to split into micro-frontends without sacrificing developer experience.',
      constraints: [
        'Shared dependencies between teams (React, UI library)',
        'Existing CI/CD pipeline couldn\'t handle parallel builds',
        'Legacy code couldn\'t be immediately rewritten',
        'Teams needed independent deployment capability',
      ],
      solution: 'Implemented Module Federation with Webpack 5. Created a shared scope for common dependencies to avoid duplication. Built a custom CI/CD pipeline that detected changed micro-frontends and triggered parallel builds only for affected modules. Established version contracts between host and remote applications. Implemented local development with federation for seamless DX.',
      tradeoffs: [
        'Initial migration took 4 months due to legacy code refactoring',
        'Version contracts required coordination between teams (solved with automated compatibility checks)',
        'Debugging跨-module issues became more complex (mitigated with enhanced error boundaries)',
        'Build cache invalidation strategy needed ongoing refinement',
      ],
      outcome: 'Reduced build times from 8 minutes to 2 minutes on average (75% improvement). Bundle size per micro-frontend reduced to 200-400KB. Teams could deploy independently without coordination. Initial load time improved from 3.2s to 1.4s.',
    },
    {
      title: 'Type-Safe API Layer',
      challenge: 'The existing API integration layer had no type safety between frontend and backend, leading to runtime errors when API contracts changed. Manual TypeScript interfaces were constantly out of sync with the actual API responses.',
      constraints: [
        'Backend was written in Go, not TypeScript',
        'API had 200+ endpoints with complex nested structures',
        'Some endpoints had dynamic response structures based on request parameters',
        'Team couldn\'t change backend architecture',
      ],
      solution: 'Built OpenAPI specification generation from Go backend using swag. Created a custom code generator that consumed the OpenAPI spec and generated TypeScript types and API client functions. Implemented runtime validation using Zod schemas generated from the same spec. Set up CI pipeline to regenerate types on API changes and fail build if contracts broke.',
      tradeoffs: [
        'Initial code generator development took 2 weeks',
        'Generated code added 15% to bundle size (acceptable for type safety gains)',
        'Team had to learn the generated API patterns',
        'Custom generator required maintenance when OpenAPI spec evolved',
      ],
      outcome: 'Eliminated all runtime type errors related to API responses. API contract changes now caught at build time. Development velocity increased by 30% due to autocomplete and type hints. New team members could integrate with API in hours instead of days.',
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <Container size="6xl">
        <div className="space-y-16">
          <div className="space-y-4 max-w-2xl">
            <Heading level={2} className="text-4xl">
              Engineering Case Studies
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              Deep dives into complex engineering problems and the decisions made to solve them.
            </Text>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <EngineeringCaseStudy key={index} {...caseStudy} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
