const Team = () => {
  const teamMembers = [
    {
      name: "Pablo",
      role: "Socio Fundador",
      description: "Especialista en optimización de procesos y gestión operativa"
    },
    {
      name: "Lucho",
      role: "Socio Fundador",
      description: "Experto en automatización y soluciones tecnológicas"
    },
    {
      name: "Luna",
      role: "Socia Fundadora", 
      description: "Especialista en certificaciones y cumplimiento normativo"
    },
    {
      name: "Marcos",
      role: "Socio Fundador",
      description: "Técnico en informática, redes, documentación, 5S, lean manufacturing"
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="text-blue-600">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinando experiencia y pasión por ayudar a las empresas a crecer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 p-6 text-center"
            >
              {/* Icono de persona en lugar de foto */}
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Un equipo con experiencia trabajando juntos
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos un grupo de socios que decidimos crear <span className="font-bold text-blue-600">Insolva</span> para 
              compartir nuestra experiencia adquirida y ayudar a otras PyMES y empresas a alcanzar su máximo potencial. 
              Nuestra trayectoria conjunta nos ha permitido desarrollar metodologías probadas y soluciones efectivas 
              que generan resultados tangibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
