import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TerminosCondiciones = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones de Insolva</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. INFORMACIÓN GENERAL</h2>
              <p className="text-gray-600 mb-4">
                Este sitio web es operado por Insolva. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren a Insolva.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p><strong>Sitio web:</strong> http://insolvagroup.com</p>
                <p><strong>Correo de contacto:</strong> contacto@insolvagroup.com</p>
                <p><strong>Dirección:</strong> Ushuaia, Tierra del Fuego, Argentina</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. SERVICIOS PRESTADOS</h2>
              <p className="text-gray-600 mb-4">En Insolva ofrecemos servicios profesionales de:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Optimización de procesos</li>
                <li>Automatización de tareas y flujos</li>
                <li>Consultoría y diagnóstico industrial</li>
                <li>Soporte tecnológico y conectividad</li>
                <li>Desarrollo de soluciones digitales a medida (sitios web, tableros, formularios, capacitaciones, etc.)</li>
              </ul>
              <p className="text-gray-600">
                No vendemos productos físicos ni digitales listos para descargar. Todas nuestras soluciones son personalizadas según diagnóstico previo y contrato acordado con cada cliente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. PRESUPUESTOS Y PAGOS</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Los valores de nuestros servicios pueden variar según el alcance del proyecto.</li>
                <li>Los presupuestos tienen una validez de 15 días corridos desde su emisión.</li>
                <li>El pago se realiza por transferencia bancaria o medio acordado. En algunos casos, se requiere adelanto del 50% para comenzar a trabajar.</li>
                <li>Los precios pueden incluir impuestos cuando corresponda.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. ENTREGAS Y PLAZOS</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cada servicio tiene un cronograma acordado previamente con el cliente.</li>
                <li>Se entrega por fases o al finalizar el servicio, según lo pactado.</li>
                <li>Cualquier modificación solicitada por el cliente fuera del alcance original puede generar nuevos plazos o costos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. GARANTÍAS Y SOPORTE</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Brindamos garantía sobre el funcionamiento correcto de las soluciones entregadas durante 30 días posteriores a la entrega final.</li>
                <li>El soporte técnico posterior puede incluirse en el servicio o presupuestarse aparte.</li>
                <li>No nos responsabilizamos por modificaciones realizadas por terceros luego de la entrega.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. PRIVACIDAD Y CONFIDENCIALIDAD</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Toda la información compartida por el cliente es tratada con confidencialidad.</li>
                <li>Podremos usar datos anónimos para estadísticas o mejora de servicios, nunca información sensible sin consentimiento.</li>
                <li>Nuestro equipo firma cláusulas de confidencialidad internas y externas.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. MODIFICACIONES DE LOS TÉRMINOS</h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento. Los cambios serán efectivos al publicarse en este sitio web.
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

export default TerminosCondiciones;
