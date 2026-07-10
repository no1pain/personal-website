import { Container } from '@/components/layout/container'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'

export function EngineeringFocus() {
  const focuses = [
    {
      title: 'Performance',
      description: 'Fast applications are better applications. I optimize for Core Web Vitals, minimize bundle sizes, and ensure smooth 60fps interactions. Performance is a feature, not an afterthought.',
    },
    {
      title: 'Accessibility',
      description: 'The web should work for everyone. I build with semantic HTML, proper ARIA labels, and keyboard navigation in mind. Accessibility isn\'t optional—it\'s fundamental.',
    },
    {
      title: 'Developer Experience',
      description: 'Great DX leads to great products. I prioritize clear abstractions, comprehensive tooling, and documentation that enables teams to move fast without breaking things.',
    },
    {
      title: 'Type Safety',
      description: 'TypeScript isn\'t just about catching errors—it\'s about documentation at the type level. I leverage the type system to make impossible states unrepresentable and refactor with confidence.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Code that works today should work tomorrow. I design systems with clear boundaries, separation of concerns, and patterns that scale from prototypes to production.',
    },
    {
      title: 'Product Thinking',
      description: 'Engineering exists to serve product goals. I collaborate closely with design and product to understand user needs, then build technical solutions that deliver real value.',
    },
  ]

  return (
    <section className="py-24">
      <Container size="6xl">
        <div className="space-y-16">
          <div className="space-y-4 max-w-2xl">
            <Heading level={2} className="text-4xl">
              Engineering Focus
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              The principles that guide how I build software.
            </Text>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {focuses.map((focus, index) => (
              <div key={index} className="space-y-3 p-6 rounded-lg border bg-card">
                <Heading level={4} className="text-xl">
                  {focus.title}
                </Heading>
                <Text size="sm" className="text-muted-foreground leading-relaxed">
                  {focus.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
