import { useState } from 'react'
import { FiWifi, FiShield, FiVideo, FiSmartphone, FiHome, FiZap, FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const Products = () => {
    // Array escalable: agregar un nuevo producto = agregar un objeto más
    const products = [
        {
            id: 'seguridad',
            name: 'Insolva Seguridad',
            tagline: 'Conectividad y Seguridad Hogareña',
            description:
                'Planificá la conectividad y seguridad de tu hogar desde la obra. Internet, redes, cámaras, alarmas y monitoreo de obradores en Ushuaia, Tierra del Fuego.',
            features: [
                'Redes Wi-Fi Mesh de alta cobertura',
                'Cámaras IP con monitoreo móvil 24/7',
                'Alarmas inteligentes integradas',
                'Sistemas para obradores y obras',
            ],
            image: '/images/hero.png', // Usamos la imagen hero como referencia visual
            url: 'https://insolvaseguridad.com',
            gradient: 'from-blue-600 to-green-500',
            accentColor: 'blue',
            icon: (
                <FiShield className="w-8 h-8" />
            ),
        },
        {
            id: 'tickia',
            name: 'Tickia',
            tagline: 'Control de gastos con IA',
            description:
                'Sacale una foto a la factura del proveedor y en segundos tenés todo cargado. Proveedor, montos, IVA, detalle. Sin Excel, sin errores, sin perder tiempo.',
            features: [
                'Extracción automática con IA',
                'Integración con Telegram',
                'Respaldo en la nube',
                'Detección de aumentos de precios',
            ],
            image: '/images/tickia.jpg',
            url: 'https://tickia-insolva.netlify.app',
            gradient: 'from-emerald-500 to-cyan-500',
            accentColor: 'emerald',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
            ),
        }
    ]

    return (
        <section id="productos" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-green-100/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado de sección */}
                <div className="text-center mb-14 sm:mb-20">
                    <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-5 animate-fadeIn">
                        Nuestras Soluciones
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeIn">
                        Productos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Digitales</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp">
                        Soluciones tecnológicas desarrolladas por INSOLVA para automatizar y simplificar tu negocio
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 gap-12 lg:gap-16">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group animate-scaleIn"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                                    {/* Imagen del producto */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 lg:p-10 flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
                                        {/* Glassmorphism overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10"></div>
                                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                            <span className="text-white/80 text-xs font-medium">Activo</span>
                                        </div>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="relative z-10 rounded-xl shadow-2xl max-h-[300px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Glow effect */}
                                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t ${product.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700`}></div>
                                    </div>

                                    {/* Contenido del producto */}
                                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                                        {/* Badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center shadow-lg`}>
                                                {product.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h3>
                                                <p className={`text-sm font-semibold transition-colors duration-300 ${product.id === 'seguridad' ? 'text-blue-600' : 'text-emerald-600'}`}>
                                                    {product.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Descripción */}
                                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            {product.features.map((feature, fIndex) => (
                                                <div
                                                    key={fIndex}
                                                    className="flex items-center gap-2.5 group/feat"
                                                >
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${product.id === 'seguridad' ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                                                        <svg className={`w-3 h-3 ${product.id === 'seguridad' ? 'text-blue-600' : 'text-emerald-600'}`} fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${product.gradient} text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto`}
                                        >
                                            Conocer más
                                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Card / WhatsApp CTA */}
                <div className="mt-16 sm:mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Necesitás una solución personalizada?</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Cada empresa tiene desafíos únicos. Diseñamos e implementamos herramientas a medida para optimizar tus procesos operativos.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/542901641452?text=Hola%20INSOLVA%2C%20quiero%20consultar%20por%20sus%20servicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chateá con nosotros
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
