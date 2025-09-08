import { FiUsers, FiTrendingUp, FiAward, FiTarget } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Experiencia Comprobada",
      description: "Amplia experiencia trabajando juntos como socios, perfeccionando metodologías que realmente funcionan."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Resultados Medibles",
      description: "No vendemos promesas. Entregamos mejoras cuantificables en eficiencia, costos y productividad."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Enfoque Integral",
      description: "Desde diagnóstico hasta implementación. Acompañamos todo el proceso de transformación."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Orientados a PyMES",
      description: "Entendemos las necesidades específicas de empresas en crecimiento y sus desafíos únicos."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-electric-blue font-semibold text-lg mb-4 block">¿QUIÉNES SOMOS?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              El equipo que tu empresa <span className="gradient-text">necesitaba</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos un grupo de socios con <strong>más de una década trabajando juntos</strong>, 
              que decidimos crear INSOLVA para compartir nuestra experiencia adquirida y 
              ayudar a otras PyMES y empresas a alcanzar su máximo potencial.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Más que consultores, somos tus <span className="gradient-text">socios estratégicos</span>
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Experiencia real:</strong> No somos teóricos. Hemos vivido los desafíos que enfrentas día a día.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-light-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Metodología probada:</strong> Perfeccionando procesos que generan resultados reales.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Compromiso total:</strong> Tu éxito es nuestro éxito. Trabajamos hasta lograr los objetivos.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-light-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">12+</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Años de Partnership</h4>
                      <p className="text-gray-600 text-sm">Construyendo soluciones juntos</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Decidimos crear INSOLVA porque creemos que toda empresa merece acceso a 
                    consultoría de nivel mundial, sin los costos prohibitivos de las grandes consultoras."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-light-green rounded-2xl transform rotate-3"></div>
                <img 
                  src="/images/hero.png" 
                  alt="Equipo Insolva" 
                  className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Disponibles para tu proyecto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-light-green rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-electric-blue to-light-green p-8 rounded-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para transformar tu empresa?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                No esperes más. Cada día que pasa sin optimizar tus procesos es dinero que pierdes.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-electric-blue px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                Agenda tu consulta gratuita ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
