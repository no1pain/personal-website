import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Divider } from '@/components/ui/divider'
import { List, ListItem } from '@/components/ui/list'
import { CaseStudy } from '@/data/case-studies'

export interface EngineeringCaseStudyProps extends CaseStudy { }

export function EngineeringCaseStudy(props: EngineeringCaseStudyProps) {
  return (
    <Card size="lg" className="h-full">
      <CardHeader>
        <Heading level={3} className="text-2xl">
          {props.title}
        </Heading>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Challenge
          </Text>
          <Text size="sm" className="leading-relaxed">
            {props.challenge}
          </Text>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Constraints
          </Text>
          <List>
            {props.constraints.map((constraint) => (
              <ListItem key={constraint}>{constraint}</ListItem>
            ))}
          </List>
        </div>

        <Divider />

        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Solution
          </Text>
          <Text size="sm" className="leading-relaxed">
            {props.solution}
          </Text>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Trade-offs
          </Text>
          <List>
            {props.tradeoffs.map((tradeoff) => (
              <ListItem key={tradeoff}>{tradeoff}</ListItem>
            ))}
          </List>
        </div>

        <Divider />

        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Outcome
          </Text>
          <Text size="sm" className="leading-relaxed">
            {props.outcome}
          </Text>
        </div>
      </CardContent>
    </Card>
  )
}
