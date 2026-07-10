import { Container } from '@/components/layout/container'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <Container size="4xl" centered={false}>
        <div className="space-y-8">
          <div className="space-y-2">
            <Heading level={1} className="text-foreground">
              Oleksandr Kazan
            </Heading>
          </div>

          <div className="space-y-1">
            <Text size="lg" weight="medium" className="text-muted-foreground">
              Frontend Engineer
            </Text>
          </div>

          <div className="max-w-2xl">
            <Text size="base" className="text-muted-foreground leading-relaxed">
              Building modern web applications with React, Next.js and TypeScript.
            </Text>
          </div>

          <div className="space-y-4">
            <Text size="sm" weight="medium" className="text-muted-foreground">
              2+ years commercial experience
            </Text>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/resume" underline="none">
                  Resume
                </Link>
              </Button>

              <div className="flex items-center gap-6">
                <Link
                  href="https://github.com"
                  variant="muted"
                  underline="hover"
                  className="text-sm"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  variant="muted"
                  underline="hover"
                  className="text-sm"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
