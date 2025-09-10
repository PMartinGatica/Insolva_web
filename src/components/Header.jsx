import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipo', href: '#equipo' },
    // { name: 'Contacto', href: '#contacto' }
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    
    // Si no estamos en la página principal, navegar primero
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const handleLogoClick = () => {
    setIsMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Mobile First */}
          <div className="flex items-center space-x-2 z-[1001]">
            <img 
              src="/images/insolvalogo.png" 
              alt="Insolva" 
              className="h-8 sm:h-10 w-auto cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105"
            >
              Contactanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors z-[1001] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-3'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 z-[999] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="pt-20 pb-6 px-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left text-lg font-medium text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 ${
                      isMenuOpen ? 'animate-slideInRight' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => handleNavClick('#contacto')}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Contactanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
