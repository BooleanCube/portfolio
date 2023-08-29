import Research from "@/components/research";

export const metadata = {
  title: 'BooleanCube',
  description: 'Home page of BooleanCube\'s portfolio website. Learn more about BooleanCube here...',
}

import Hero from '@/components/hero'
import About from '@/components/about'
import Connect from '@/components/connect'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hero-break" />
      <About />
      <Skills />
      <Projects />
      <Research />
    </>
  )
}
