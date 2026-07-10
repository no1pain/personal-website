import { Container } from '@/components/layout/container'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-32" aria-labelledby="hero-heading">
      <Container size="xl">
        <div className="space-y-8">
          <div className="space-y-3">
            <Heading level={1} className="text-foreground tracking-tight" id="hero-heading">
              Oleksandr Kazan
            </Heading>
            <Text size="lg" weight="medium" className="text-muted-foreground">
              Frontend Developer
            </Text>
          </div>

          <div className="max-w-2xl">
            <Text size="base" className="text-muted-foreground leading-relaxed">
              Frontend Developer with 2+ years of commercial experience building modern web applications using React, Next.js and TypeScript.

              I enjoy creating fast, scalable and maintainable user experiences with a focus on clean architecture and product quality.            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" size="lg" asChild>
              <Link href="/resume" underline="none">
                Resume
              </Link>
            </Button>

            <nav className="flex items-center gap-8" aria-label="Social links">
              <Link
                href="https://github.com"
                variant="muted"
                underline="hover"
                className="text-sm"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                variant="muted"
                underline="hover"
                className="text-sm"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  )
}
