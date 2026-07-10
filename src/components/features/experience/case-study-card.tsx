import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Badge } from '@/components/ui/badge'
import { Divider } from '@/components/ui/divider'

export interface CaseStudyCardProps {
  company: string
  role: string
  period: string
  impact: string[]
  engineering: string[]
  technologies: string[]
  businessValue: string
}

export function CaseStudyCard({
  company,
  role,
  period,
  impact,
  engineering,
  technologies,
  businessValue,
}: CaseStudyCardProps) {
  return (
    <Card size="lg" className="h-full">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <Heading level={3} className="text-2xl">
            {company}
          </Heading>
          <div className="flex items-center gap-3">
            <Text size="sm" weight="medium" className="text-muted-foreground">
              {role}
            </Text>
            <Divider orientation="vertical" className="h-4" />
            <Text size="sm" className="text-muted-foreground">
              {period}
            </Text>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Business Value */}
        <div className="space-y-2">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Business Impact
          </Text>
          <Text size="sm" className="leading-relaxed">
            {businessValue}
          </Text>
        </div>

        <Divider />

        {/* Impact */}
        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Key Outcomes
          </Text>
          <ul className="space-y-2">
            {impact.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">→</span>
                <Text size="sm" className="leading-relaxed">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        {/* Engineering Decisions */}
        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Engineering Decisions
          </Text>
          <ul className="space-y-2">
            {engineering.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">→</span>
                <Text size="sm" className="leading-relaxed">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        {/* Technologies */}
        <div className="space-y-3">
          <Text size="xs" weight="semibold" className="text-muted-foreground uppercase tracking-wider">
            Technologies
          </Text>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
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
