import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { EngineeringCaseStudy } from '@/components/features/case-studies/engineering-case-study'
import { caseStudies } from '@/data/case-studies'

export function CaseStudies() {
  return (
    <section className="py-32 bg-muted/30" aria-labelledby="case-studies-heading">
      <Container size="full">
        <div className="space-y-20">
          <SectionHeader
            id="case-studies-heading"
            title="Engineering Case Studies"
            description="Examples of technical challenges I've worked on."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <EngineeringCaseStudy key={caseStudy.title} {...caseStudy} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
