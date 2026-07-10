import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { EngineeringFocus } from '@/components/sections/engineering-focus'
import { CaseStudies } from '@/components/sections/case-studies'

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <EngineeringFocus />
      <CaseStudies />
    </main>
  )
}
