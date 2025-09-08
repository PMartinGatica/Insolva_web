import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function App() {
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
    <div className="App">
      <Header />
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
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
