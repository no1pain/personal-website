import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Divider } from '@/components/ui/divider'

export interface EngineeringCaseStudyProps {
  title: string
  challenge: string
  constraints: string[]
  solution: string
  tradeoffs: string[]
  outcome: string
}

export function EngineeringCaseStudy({
  title,
  challenge,
  constraints,
  solution,
  tradeoffs,
  outcome,
}: EngineeringCaseStudyProps) {
  return (
    <Card size="lg" className="h-full">
      <CardHeader>
        <Heading level={3} className="text-2xl">
          {title}
        </Heading>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Challenge
          </Text>
          <Text size="sm" className="leading-relaxed">
            {challenge}
          </Text>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Constraints
          </Text>
          <ul className="space-y-2">
            {constraints.map((constraint, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">•</span>
                <Text size="sm" className="leading-relaxed">
                  {constraint}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Solution
          </Text>
          <Text size="sm" className="leading-relaxed">
            {solution}
          </Text>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Trade-offs
          </Text>
          <ul className="space-y-2">
            {tradeoffs.map((tradeoff, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">•</span>
                <Text size="sm" className="leading-relaxed">
                  {tradeoff}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Outcome
          </Text>
          <Text size="sm" className="leading-relaxed">
            {outcome}
          </Text>
        </div>
      </CardContent>
    </Card>
  )
}
