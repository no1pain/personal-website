import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { WorkHistoryCard } from '@/components/features/experience/work-history-card'
import { experiences } from '@/data/experiences'

export function Experience() {
  return (
    <section className="py-32 bg-muted/30" aria-labelledby="experience-heading">
      <Container size="full">
        <div className="space-y-20">
          <SectionHeader
            id="experience-heading"
            title="Experience"
            description="Frontend development experience building applications with React, Next.js, and TypeScript."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <WorkHistoryCard key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
