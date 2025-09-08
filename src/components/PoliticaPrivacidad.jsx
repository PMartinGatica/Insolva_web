import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón volver */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad de Insolva</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. INFORMACIÓN GENERAL</h2>
              <p className="text-gray-600 mb-4">
                En Insolva respetamos tu privacidad y nos comprometemos a proteger la información personal que compartas con nosotros.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p><strong>Sitio web:</strong> http://insolvagroup.com</p>
                <p><strong>Correo de contacto:</strong> contacto@insolvagroup.com</p>
                <p><strong>Dirección:</strong> Ushuaia, Tierra del Fuego, Argentina</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. INFORMACIÓN QUE RECOPILAMOS</h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-700 mb-3">Información que nos proporcionas voluntariamente:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nombre y apellido</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Empresa u organización</li>
                  <li>Consultas y mensajes que nos envíes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-3">Información que recopilamos automáticamente:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas en nuestro sitio</li>
                  <li>Tiempo de permanencia</li>
                  <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. CÓMO UTILIZAMOS TU INFORMACIÓN</h2>
              <p className="text-gray-600 mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responder a tus consultas y solicitudes de presupuesto</li>
                <li>Brindarte nuestros servicios de consultoría y automatización</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Enviarte información relevante sobre nuestros servicios (solo si das tu consentimiento)</li>
                <li>Cumplir con obligaciones legales cuando corresponda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. COMPARTIR INFORMACIÓN</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800 font-medium">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes situaciones:
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cuando sea necesario para prestar nuestros servicios</li>
                <li>Cuando tengas tu consentimiento explícito</li>
                <li>Cuando sea requerido por ley</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. COOKIES</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies técnicas esenciales para el funcionamiento del sitio web. No utilizamos cookies de terceros para publicidad o seguimiento.
              </p>
              <p className="text-gray-600">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. SEGURIDAD DE LA INFORMACIÓN</h2>
              <p className="text-gray-600">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. TUS DERECHOS</h2>
              <p className="text-gray-600 mb-4">Tienes derecho a:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al tratamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Para ejercer estos derechos, contáctanos en: <strong>contacto@insolvagroup.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. RETENCIÓN DE DATOS</h2>
              <p className="text-gray-600">
                Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada y para cumplir con nuestras obligaciones legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. CONTACTO</h2>
              <p className="text-gray-600 mb-4">Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> contacto@insolvagroup.com</p>
                <p><strong>Dirección:</strong> Ushuaia, Tierra del Fuego, Argentina</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. CAMBIOS EN ESTA POLÍTICA</h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de actualizar esta Política de Privacidad. Los cambios serán publicados en esta página con la fecha de última actualización.
              </p>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Última actualización:</strong> 8 de septiembre de 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
