import React from 'react'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'

export default function HomePage() {
  return (
    <div>
      <LandingPage />
      <About />
      <Projects />
      <Testimonial />
    </div>
  )
}
