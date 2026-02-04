const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Número 404 animado */}
        <div className="relative mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-gray-200 animate-pulse select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Icono de búsqueda animado */}
            <div className="text-6xl animate-bounce">
              🔍
            </div>
          </div>
        </div>

        {/* Mensaje principal */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 animate-fadeIn">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 animate-slideInUp">
            La página que buscas parece haberse perdido en el proceso de optimización.
          </p>
          <p className="text-sm text-gray-500 animate-slideInUp delay-100">
            No te preocupes, en <span className="font-semibold text-blue-600">Insolva</span> somos expertos en encontrar soluciones.
          </p>
        </div>

        {/* Opciones de navegación */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-scaleIn">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ← Volver atrás
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 Ir al inicio
          </button>
        </div>

        {/* Información de contacto */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn delay-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ¿Necesitas ayuda?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <span>📧</span>
              <a 
                href="mailto:contacto@insolvagroup.com"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                contacto@insolvagroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📱</span>
              <a 
                href="https://wa.me/+5492901308927?text=Hola! Tuve un problema navegando en su sitio web."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                WhatsApp: +54 9 2901 308-927
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/Insolva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/insolva_group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Animación decorativa */}
        <div className="mt-8 opacity-50">
          <div className="flex justify-center space-x-4 animate-pulse">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
