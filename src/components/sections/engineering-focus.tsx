import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { engineeringFocuses } from '@/data/engineering-focus'

export function EngineeringFocus() {
  return (
    <section className="py-32 fade-in fade-in-delay-2" aria-labelledby="engineering-focus-heading">
      <Container size="full">
        <div className="space-y-20">
          <SectionHeader
            id="engineering-focus-heading"
            title="Engineering Focus"
            description="Areas I focus on in my work as a frontend developer."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringFocuses.map((focus) => (
              <article key={focus.title} className="space-y-3 p-6 rounded-lg border border-border/50 bg-card hover:shadow-md transition-shadow duration-200">
                <Heading level={4} className="text-xl">
                  {focus.title}
                </Heading>
                <Text size="sm" className="text-muted-foreground leading-relaxed">
                  {focus.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
