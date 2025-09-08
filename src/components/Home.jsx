import { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Team from './Team'
import Contact from './Contact'

const Home = () => {
  // Animación scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    // Observar elementos con clase animate-on-scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div id="inicio">
        <Hero />
      </div>
      <div id="nosotros">
        <About />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="equipo">
        <Team />
      </div>
      <div id="contacto">
        <Contact />
      </div>
    </>
  )
}

export default Home
