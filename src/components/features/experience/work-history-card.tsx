import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Badge } from '@/components/ui/badge'
import { Divider } from '@/components/ui/divider'
import { List, ListItem } from '@/components/ui/list'
import { Experience } from '@/data/experiences'

export interface WorkHistoryCardProps extends Experience { }

export function WorkHistoryCard(props: WorkHistoryCardProps) {
  return (
    <Card size="lg" className="h-full">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <Heading level={3} className="text-2xl">
            {props.company}
          </Heading>
          <div className="flex items-center gap-3 flex-wrap">
            <Text size="sm" weight="medium" className="text-muted-foreground">
              {props.role}
            </Text>
            <Divider orientation="vertical" className="h-4" />
            <Text size="sm" className="text-muted-foreground">
              {props.period}
            </Text>
            {props.location && (
              <>
                <Divider orientation="vertical" className="h-4" />
                <Text size="sm" className="text-muted-foreground">
                  {props.location}
                </Text>
              </>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Business Impact
          </Text>
          <Text size="sm" className="leading-relaxed">
            {props.businessValue}
          </Text>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Key Outcomes
          </Text>
          <List>
            {props.impact.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Engineering Decisions
          </Text>
          <List>
            {props.engineering.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>

        <Divider />

        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Technologies
          </Text>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {props.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
