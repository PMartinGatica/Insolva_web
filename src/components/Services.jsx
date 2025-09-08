const Services = () => {
  const services = [
    {
      icon: "🔍",
      title: "Diagnóstico y Optimización",
      shortDesc: "Análisis integral y rediseño de procesos"
    },
    {
      icon: "📊", 
      title: "Gestión y Control Operativo",
      shortDesc: "Sistemas de control y análisis en tiempo real"
    },
    {
      icon: "🤖",
      title: "Automatización de Procesos", 
      shortDesc: "Digitalización y automatización de flujos de trabajo"
    },
    {
      icon: "�",
      title: "Certificaciones y Cumplimiento",
      shortDesc: "Implementación de normas ISO y auditorías"
    },
    {
      icon: "⚡",
      title: "Mejora de Productividad",
      shortDesc: "Optimización de tiempos y recursos operativos"
    },
    {
      icon: "💰",
      title: "Análisis de Costos",
      shortDesc: "Estructuras de costos y análisis de rentabilidad"
    },
    {
      icon: "🎯",
      title: "Consultoría Estratégica", 
      shortDesc: "Planificación y desarrollo de estrategias operacionales"
    },
    {
      icon: "🔧",
      title: "Implementación y Soporte",
      shortDesc: "Ejecución de proyectos y soporte continuo"
    }
  ];

  // Función para renderizar animaciones específicas para cada servicio
  const renderServiceAnimation = (index, service) => {
    const animations = {
      0: ( // Optimización de Procesos
        <div className="w-full h-full flex items-center justify-center">
          {/* Gráfico de proceso: flecha lenta → rápida */}
          <div className="relative w-16 h-16">
            {/* Proceso lento (rojo) */}
            <div className="absolute top-2 w-12 h-2 bg-red-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full w-3 group-hover:w-12 transition-all duration-1000 ease-out"></div>
            </div>
            <span className="absolute -top-3 left-0 text-xs text-red-500 group-hover:text-green-500 transition-colors duration-500">Lento</span>
            
            {/* Flecha de transformación */}
            <div className="absolute top-6 left-5 transform group-hover:rotate-90 transition-transform duration-500">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Proceso rápido (verde) */}
            <div className="absolute top-12 w-12 h-2 bg-green-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-12 transition-all duration-500 delay-300 ease-out"></div>
            </div>
            <span className="absolute top-16 left-0 text-xs text-gray-400 group-hover:text-green-500 transition-colors duration-500 delay-300">Rápido</span>
          </div>
        </div>
      ),
      1: ( // Gestión de Calidad
        <div className="w-full h-full flex items-center justify-center">
          {/* Check marks apareciendo */}
          <div className="w-16 h-16 grid grid-cols-3 gap-1 p-2">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-4 rounded border-2 border-red-300 group-hover:border-green-500 group-hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <svg className="w-2 h-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${i * 80 + 150}ms` }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      ),
      2: ( // Automatización
        <div className="w-full h-full flex items-center justify-center">
          {/* Engranajes girando */}
          <div className="relative w-16 h-16">
            <div className="absolute top-2 left-2 w-10 h-10 group-hover:animate-spin transition-all duration-500">
              <svg className="w-full h-full text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute top-8 left-8 w-6 h-6 group-hover:animate-spin animation-reverse transition-all duration-500">
              <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      ),
      3: ( // Certificaciones y Cumplimiento
        <div className="w-full h-full flex items-center justify-center">
          {/* Sello de aprobado */}
          <div className="relative w-16 h-16">
            {/* Sello circular */}
            <div className="absolute inset-0 border-4 border-green-500 rounded-full bg-green-50 opacity-60 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
              {/* Texto del sello */}
              <div className="text-center">
                <div className="text-xs font-bold text-green-700 group-hover:animate-pulse">ISO</div>
                <div className="text-xs font-bold text-green-700">✓</div>
              </div>
            </div>
            
            {/* Estrellas que aparecen alrededor */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ 
                  transform: `rotate(${i * 60}deg) translateY(-25px)`,
                  transformOrigin: 'center 32px',
                  transitionDelay: `${i * 100}ms`,
                  fontSize: '8px'
                }}
              >
                ⭐
              </div>
            ))}
            
            {/* Sello de "APROBADO" que aparece */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 bg-green-100 px-2 py-1 rounded-full border border-green-300">
              APROBADO
            </div>
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 delay-200"></div>
          </div>
        </div>
      ),
      4: ( // Mejora de Productividad
        <div className="w-full h-full flex items-center justify-center">
          {/* Velocímetro de productividad */}
          <div className="w-16 h-16 relative">
            {/* Base del velocímetro */}
            <div className="absolute inset-0 border-4 border-gray-300 border-t-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            
            {/* Aguja que se mueve */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-6 bg-red-500 group-hover:bg-green-500 transform -rotate-45 group-hover:rotate-45 transition-all duration-700 origin-bottom rounded-full"></div>
            </div>
            
            {/* Centro del velocímetro */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Marcas de velocidad */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-red-500 group-hover:text-green-500 transition-colors duration-500">⚡</div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600 group-hover:text-green-600 transition-colors duration-500">MAX</div>
          </div>
        </div>
      ),
      5: ( // Análisis de Costos
        <div className="w-full h-full flex items-center justify-center">
          {/* Animación de ganancia/ahorro */}
          <div className="w-16 h-16 relative flex flex-col items-center justify-center">
            {/* Símbolo de dinero principal */}
            <div className="text-2xl text-green-600 group-hover:animate-pulse mb-1">💰</div>
            
            {/* Flechas de crecimiento */}
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="text-green-500 opacity-60 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  ↗️
                </div>
              ))}
            </div>
            
            {/* Números de porcentaje que aparecen */}
            <div className="absolute -top-2 -right-2 text-xs text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 font-bold">
              +25%
            </div>
            
            {/* Monedas que "caen" */}
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700"
                  style={{ 
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                    transitionDelay: `${i * 200}ms`,
                    fontSize: '10px'
                  }}
                >
                  💵
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      6: ( // Consultoría Estratégica
        <div className="w-full h-full flex items-center justify-center">
          {/* Gráfico de crecimiento estratégico */}
          <div className="w-16 h-16 relative">
            <div className="flex items-end justify-between h-12 p-2 absolute bottom-2">
              {[30, 50, 75, 95].map((height, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-t from-blue-600 to-blue-400 w-2 rounded-t transition-all duration-700 ease-out bar-growth"
                  style={{ 
                    height: '25%',
                    transitionDelay: `${i * 200}ms`,
                    '--target-height': `${height}%`
                  }}
                ></div>
              ))}
            </div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <svg className="w-6 h-6 text-green-500 opacity-60 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-1000" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      ),
      7: ( // Soporte Técnico
        <div className="w-full h-full flex items-center justify-center">
          {/* Estado: Error → Solucionado */}
          <div className="relative w-16 h-16">
            {/* Estado de error */}
            <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Estado solucionado */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:animate-bounce">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )
    };

    return animations[index] || null;
  };

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeIn">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp">
            Soluciones integrales para transformar y optimizar tu empresa
          </p>
        </div>

        {/* Mobile-first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-blue-200 relative overflow-hidden animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animación como icono principal */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center relative h-16 flex items-center justify-center">
                {renderServiceAnimation(index, service)}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center min-h-[48px] sm:min-h-[60px] flex items-center justify-center leading-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed relative z-10">
                {service.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
