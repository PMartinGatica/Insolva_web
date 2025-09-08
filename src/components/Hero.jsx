const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230080ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-12 sm:w-20 h-12 sm:h-20 bg-blue-600/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-10 sm:w-16 h-10 sm:h-16 bg-green-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-blue-600/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-green-500/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6 sm:mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-gray-700">Transformando empresas</span>
          </div>

          {/* Main Heading - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-slideInUp leading-tight">
            <span className="block text-gray-900 mb-2">Transformamos tu</span>
            <span className="gradient-text">Operación en Éxito</span>
          </h1>

          {/* Subtitle - Mobile First */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-slideInUp px-4" style={{animationDelay: '0.2s'}}>
            Somos un equipo experimentado de socios comprometidos con el crecimiento de tu empresa. 
            <strong className="text-gray-800"> Optimizamos procesos, reducimos costos y automatizamos operaciones</strong> para que te enfoques en hacer crecer tu negocio.
          </p>

          {/* CTA Buttons - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slideInUp px-4" style={{animationDelay: '0.4s'}}>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <span>Consulta Gratuita</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto bg-white/90 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Ver Servicios</span>
            </button>
          </div>

          {/* Trust Indicators - Mobile */}
          <div className="mt-12 sm:mt-16 animate-slideInUp" style={{animationDelay: '0.6s'}}>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">Confían en nosotros:</p>
            <div className="flex justify-center items-center space-x-6 sm:space-x-8 opacity-60">
              <span className="text-gray-400 font-semibold text-sm sm:text-base">PyMES</span>
              <span className="text-gray-400 font-semibold text-sm sm:text-base">Empresas</span>
              <span className="text-gray-400 font-semibold text-sm sm:text-base">Industrias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
