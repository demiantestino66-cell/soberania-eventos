'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeDemo, setActiveDemo] = useState('boda');

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-stone-900 flex flex-col justify-between selection:bg-amber-200 selection:text-stone-900 font-sans">
      
      {/* Barra de Navegación */}
      <header className="sticky top-0 z-50 px-6 py-4 bg-[#FAFAF7]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-sm font-bold tracking-[0.2em] text-stone-900 uppercase">
            Soberanía Digital <span className="text-amber-600 font-normal">| Eventos</span>
          </h1>
          <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium text-stone-600">
            <a href="#demo" className="hover:text-amber-700 transition">Simulador</a>
            <a href="#paquetes" className="hover:text-amber-700 transition">Planes</a>
            <a href="#editorial" className="hover:text-amber-700 transition">Editorial</a>
            <a href="#contacto" className="hover:text-amber-700 transition">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-stone-900 hover:bg-amber-700 text-white text-xs font-medium tracking-wider uppercase py-2.5 px-5 rounded-full transition shadow-sm">
            Cotizar Evento
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 max-w-4xl mx-auto"
      >
        <span className="text-amber-700 font-semibold text-xs tracking-[0.25em] uppercase mb-4 block">
          Diseño y Software Exclusivo
        </span>
        
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 mb-6 leading-[1.1]">
          Invitaciones Digitales <span className="font-normal italic font-serif block mt-1 text-amber-800">para Eventos Inolvidables</span>
        </h2>
        
        <p className="text-stone-600 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
          Elevá tu celebración. Combinamos tecnología interactiva (RSVP y gestión en tiempo real) con un diseño visual de alta gama y papelería física premium.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#demo" className="bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm py-4 px-8 rounded-2xl transition shadow-md flex items-center justify-center gap-2">
            📱 Probar Simulador Interactivo
          </a>
          <a href="https://wa.me/5492804841846" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-stone-100 text-stone-900 font-medium text-sm py-4 px-8 rounded-2xl border border-stone-300 transition flex items-center justify-center gap-2 shadow-sm">
            💬 Asesoramiento por WhatsApp
          </a>
        </div>
      </motion.section>

      {/* Simulador Interactivo (Preview Completo) */}
      <section id="demo" className="py-24 px-6 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/30 via-stone-950 to-stone-950 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Textos y Botones de Control */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase block mb-3">Previsualización en Vivo</span>
            <h3 className="text-3xl md:text-5xl font-light text-white mb-6">Explorá la interfaz (Scrolleá)</h3>
            <p className="text-stone-400 font-light mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Deslizá hacia abajo dentro de la pantalla del celular para ver cómo estructuramos la información: horarios, mapas, regalos y confirmaciones en un diseño impecable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button onClick={() => setActiveDemo('boda')} className={`px-6 py-3 rounded-xl text-sm tracking-wider uppercase transition border ${activeDemo === 'boda' ? 'bg-amber-600 border-amber-600 text-white font-medium' : 'bg-transparent border-stone-800 text-stone-400 hover:border-stone-600'}`}>
                Bodas
              </button>
              <button onClick={() => setActiveDemo('quince')} className={`px-6 py-3 rounded-xl text-sm tracking-wider uppercase transition border ${activeDemo === 'quince' ? 'bg-fuchsia-600 border-fuchsia-600 text-white font-medium' : 'bg-transparent border-stone-800 text-stone-400 hover:border-stone-600'}`}>
                15 Años
              </button>
              <button onClick={() => setActiveDemo('evento')} className={`px-6 py-3 rounded-xl text-sm tracking-wider uppercase transition border ${activeDemo === 'evento' ? 'bg-indigo-600 border-indigo-600 text-white font-medium' : 'bg-transparent border-stone-800 text-stone-400 hover:border-stone-600'}`}>
                Corporativo
              </button>
            </div>
          </div>

          {/* El Celular */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[320px] h-[650px] bg-black rounded-[45px] border-[10px] border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-stone-700">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-7 bg-stone-800 rounded-b-2xl w-36 mx-auto z-50 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-stone-900 rounded-full"></div>
              </div>
              
              {/* Pantalla Interna Scrollable */}
              <div 
                className="flex-1 overflow-y-auto overflow-x-hidden bg-stone-100 pb-12" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <AnimatePresence mode="wait">
                  
                  {/* DEMO BODA (Scrolleable y completa) */}
                  {activeDemo === 'boda' && (
                    <motion.div key="boda" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#FAF7F2] text-stone-800 font-serif">
                      
                      {/* Portada */}
                      <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/40 to-black/30"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-stone-900">
                          <span className="text-[10px] tracking-[0.3em] uppercase text-white mb-3">Nos Casamos</span>
                          <h2 className="text-4xl italic text-white mb-8">Valentina & Mateo</h2>
                        </div>
                      </div>

                      {/* Cuenta Regresiva */}
                      <div className="px-6 pb-10 text-center -mt-6 relative z-10">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-100 flex justify-center gap-6 text-amber-800">
                          <div className="text-center"><span className="block text-3xl">45</span><span className="text-[9px] tracking-widest uppercase text-stone-400">Días</span></div>
                          <div className="text-center"><span className="block text-3xl">12</span><span className="text-[9px] tracking-widest uppercase text-stone-400">Hs</span></div>
                          <div className="text-center"><span className="block text-3xl">30</span><span className="text-[9px] tracking-widest uppercase text-stone-400">Min</span></div>
                        </div>
                      </div>

                      {/* Info Evento (Distribución en Tarjetas) */}
                      <div className="px-6 pb-10">
                        <h3 className="text-center text-sm tracking-[0.2em] uppercase text-amber-800 mb-6">Cuándo y Dónde</h3>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 mb-4 text-center">
                          <span className="text-2xl mb-2 block">⛪</span>
                          <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-stone-800">Ceremonia</h4>
                          <p className="text-xs text-stone-500 mb-3 font-sans">Sábado 14 de Nov., 19:00 hs.<br/>Parroquia María Auxiliadora.</p>
                          <button className="bg-stone-100 text-stone-600 text-[10px] uppercase tracking-widest py-2 px-4 rounded-full border border-stone-300 font-sans">Ver en Mapa</button>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 text-center">
                          <span className="text-2xl mb-2 block">🥂</span>
                          <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-stone-800">La Fiesta</h4>
                          <p className="text-xs text-stone-500 mb-3 font-sans">Sábado 14 de Nov., 20:30 hs.<br/>Salón Las Retamas, Trelew.</p>
                          <button className="bg-stone-100 text-stone-600 text-[10px] uppercase tracking-widest py-2 px-4 rounded-full border border-stone-300 font-sans">Ver en Mapa</button>
                        </div>
                      </div>

                      {/* Detalles (Dress Code y Regalos) */}
                      <div className="px-6 py-10 bg-stone-100 text-center">
                        <h3 className="text-sm tracking-[0.2em] uppercase text-amber-800 mb-6">Detalles Adicionales</h3>
                        
                        <div className="mb-8">
                          <span className="text-xl block mb-2">👗</span>
                          <h4 className="text-xs font-bold uppercase tracking-wider mb-1 text-stone-800">Dress Code</h4>
                          <p className="text-xs text-stone-500 font-sans">Elegante. Evitar color blanco.</p>
                        </div>

                        <div>
                          <span className="text-xl block mb-2">🎁</span>
                          <h4 className="text-xs font-bold uppercase tracking-wider mb-1 text-stone-800">Regalos</h4>
                          <p className="text-xs text-stone-500 font-sans mb-3">Tu presencia es nuestro mejor regalo. Si querés ayudarnos con la luna de miel:</p>
                          <button className="bg-white text-stone-700 text-[10px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-full border border-stone-300 shadow-sm font-sans">Ver Datos Bancarios (CBU)</button>
                        </div>
                      </div>

                      {/* RSVP Final */}
                      <div className="px-6 py-12 text-center bg-white border-t border-stone-200">
                        <h3 className="text-lg italic text-stone-800 mb-2">¡Esperamos que vengas!</h3>
                        <p className="text-[11px] text-stone-500 font-sans mb-6">Por favor confirmá antes del 1 de Noviembre.</p>
                        <button className="w-full bg-amber-800 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg font-sans">Confirmar Asistencia (RSVP)</button>
                      </div>

                    </motion.div>
                  )}

                  {/* DEMO 15 AÑOS */}
                  {activeDemo === 'quince' && (
                    <motion.div key="quince" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-950 text-white font-sans">
                      
                      <div className="h-[350px] bg-gradient-to-b from-fuchsia-900 to-stone-950 relative overflow-hidden flex flex-col items-center justify-end pb-10">
                        <div className="absolute top-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/20 to-transparent"></div>
                        <div className="w-28 h-28 rounded-full border-4 border-fuchsia-400 bg-stone-800 mb-4 shadow-[0_0_30px_rgba(192,38,211,0.6)] relative z-10"></div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-fuchsia-300 relative z-10">Mis 15 Años</span>
                        <h2 className="text-4xl font-black tracking-tight mt-1 relative z-10">SOFÍA</h2>
                      </div>
                      
                      <div className="px-6 pb-8 text-center">
                        <p className="text-sm text-stone-300 mb-8 leading-relaxed">¡Preparate para la mejor noche del año! Vení con ganas de bailar hasta el amanecer.</p>
                        
                        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 text-left mb-6">
                          <h4 className="text-fuchsia-400 text-xs uppercase tracking-widest font-bold mb-4">Cronograma</h4>
                          <ul className="space-y-4 border-l-2 border-stone-800 ml-2 pl-4">
                            <li className="relative">
                              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-fuchsia-500 rounded-full"></span>
                              <p className="text-xs text-stone-400">21:00 hs - Recepción</p>
                            </li>
                            <li className="relative">
                              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-stone-700 rounded-full"></span>
                              <p className="text-xs text-stone-400">22:30 hs - Gran Entrada</p>
                            </li>
                            <li className="relative">
                              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-stone-700 rounded-full"></span>
                              <p className="text-xs text-stone-400">02:00 hs - Carnaval Carioca</p>
                            </li>
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                          <div className="bg-stone-900 p-5 rounded-2xl border border-stone-800 flex flex-col items-center justify-center">
                            <span className="text-fuchsia-500 text-2xl block mb-2">📸</span>
                            <span className="text-[10px] font-bold uppercase text-stone-300">Subir Fotos</span>
                          </div>
                          <div className="bg-stone-900 p-5 rounded-2xl border border-stone-800 flex flex-col items-center justify-center">
                            <span className="text-fuchsia-500 text-2xl block mb-2">🎵</span>
                            <span className="text-[10px] font-bold uppercase text-stone-300">Sugerir Tema</span>
                          </div>
                        </div>

                        <button className="w-full bg-fuchsia-600 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.5)]">Confirmar Asistencia</button>
                      </div>
                    </motion.div>
                  )}

                  {/* DEMO CORPORATIVO */}
                  {activeDemo === 'evento' && (
                    <motion.div key="evento" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-50 text-slate-900 font-sans min-h-full">
                      
                      <div className="h-[250px] bg-slate-900 flex flex-col items-center justify-center text-white px-6 text-center border-b-[6px] border-indigo-500">
                        <div className="w-12 h-12 bg-white/10 rounded-xl mb-4 flex items-center justify-center border border-white/20">🏢</div>
                        <h2 className="text-xl font-bold tracking-wider leading-tight">CENA ANUAL DE<br/>CAMARADERÍA</h2>
                        <span className="text-[9px] tracking-widest uppercase text-indigo-400 mt-3 font-semibold">Acceso Exclusivo Invitados</span>
                      </div>
                      
                      <div className="px-6 py-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-6 text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-2 bg-indigo-500"></div>
                          <p className="text-[10px] uppercase font-bold text-slate-500 mb-4 mt-2">Pase Digital QR</p>
                          <div className="w-32 h-32 bg-slate-100 mx-auto rounded-xl border-2 border-slate-300 border-dashed flex items-center justify-center mb-4">
                            <span className="text-slate-400 text-[10px] font-bold">QR GENERADO</span>
                          </div>
                          <p className="text-xs font-medium text-slate-700">Juan Pérez</p>
                          <p className="text-[10px] text-slate-500">Mesa 12 - Sector VIP</p>
                        </div>

                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-2">Agenda del Evento</h4>
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                          <div className="p-4 border-b border-slate-100 flex gap-4 items-center">
                            <div className="text-center px-3 border-r border-slate-200"><span className="block text-sm font-bold text-indigo-600">20:00</span></div>
                            <div className="text-xs text-slate-600 font-medium">Acreditaciones y Cóctel</div>
                          </div>
                          <div className="p-4 border-b border-slate-100 flex gap-4 items-center">
                            <div className="text-center px-3 border-r border-slate-200"><span className="block text-sm font-bold text-indigo-600">21:30</span></div>
                            <div className="text-xs text-slate-600 font-medium">Cena de Gala</div>
                          </div>
                          <div className="p-4 flex gap-4 items-center">
                            <div className="text-center px-3 border-r border-slate-200"><span className="block text-sm font-bold text-indigo-600">23:00</span></div>
                            <div className="text-xs text-slate-600 font-medium">Premios y Cierre</div>
                          </div>
                        </div>

                        <button className="w-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-md">Descargar Programa PDF</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Paquetes Core (Software) */}
      <section id="paquetes" className="py-24 px-6 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase block mb-2">Software y Web</span>
            <h3 className="text-3xl md:text-4xl font-light text-stone-900">Elegí tu nivel de desarrollo</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAF7] p-8 rounded-3xl border border-stone-200 flex flex-col justify-between hover:shadow-lg transition duration-300">
              <div>
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Esencial</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-stone-900">Web Interactiva</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">Ideal para una comunicación moderna y directa con tus invitados.</p>
                <ul className="text-xs text-stone-600 space-y-3 mb-8">
                  <li>✓ Cuenta regresiva en tiempo real</li>
                  <li>✓ Confirmación de Asistencia (RSVP)</li>
                  <li>✓ Sección de Regalos / CBU</li>
                  <li>✓ Diseño adaptado a tu paleta de colores</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-stone-900 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-700 transition">Seleccionar</a>
            </div>
            
            <div className="bg-stone-900 text-white p-8 rounded-3xl border border-stone-900 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-bl-xl">Más Elegido</div>
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Híbrido Premium</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-white">Web + Tarjetas Físicas</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">La elegancia del papel impreso unida a la tecnología interactiva.</p>
                <ul className="text-xs text-stone-300 space-y-3 mb-8">
                  <li>✓ Todo lo incluído en la Web Interactiva</li>
                  <li>✓ Diseño y confección de tarjetas físicas minimalistas</li>
                  <li>✓ Código QR único vinculado a la web</li>
                  <li>✓ Galería multimedia colaborativa para fotos</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-amber-600 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-500 transition">Seleccionar</a>
            </div>

            <div className="bg-[#FAFAF7] p-8 rounded-3xl border border-stone-200 flex flex-col justify-between hover:shadow-lg transition duration-300">
              <div>
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Total</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-stone-900">15 Años / Bodas Pro</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">Solución integral avanzada con herramientas extendidas para el salón.</p>
                <ul className="text-xs text-stone-600 space-y-3 mb-8">
                  <li>✓ Web Interactiva de alta complejidad</li>
                  <li>✓ Kit completo de gráficas para Redes Sociales</li>
                  <li>✓ Código QR para pantallas en el salón</li>
                  <li>✓ Asesoramiento y soporte técnico durante el evento</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-stone-900 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-700 transition">Seleccionar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio Complementario Editorial */}
      <section id="editorial" className="py-24 px-6 bg-amber-50 relative overflow-hidden border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <span className="text-amber-800 font-semibold text-xs tracking-[0.2em] uppercase block mb-3">Servicio Exclusivo Post-Evento</span>
            <h3 className="text-3xl md:text-4xl font-serif italic text-stone-900 mb-6">El Libro de Firmas Editorial</h3>
            <p className="text-stone-700 font-light mb-6 leading-relaxed">
              En <strong>Soberanía Editorial</strong> sabemos que los recuerdos digitales pueden perderse, pero un buen libro dura para siempre. Una vez finalizada tu celebración, tomamos todos los mensajes emotivos que tus invitados dejaron en el RSVP y las mejores fotos de la galería colaborativa.
            </p>
            <p className="text-stone-700 font-light mb-8 leading-relaxed">
              Realizamos un trabajo de diseño y maquetación profesional para entregarte un <strong>Photobook premium de tapa dura</strong>. La memoria de tu evento, inmortalizada en papel de alta calidad gráfica y editorial.
            </p>
            <a href="#contacto" className="inline-block border-b border-amber-800 text-amber-800 pb-1 text-sm font-medium uppercase tracking-widest hover:text-amber-600 hover:border-amber-600 transition">
              Consultar valor del Libro Editorial ➔
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-white shadow-2xl rounded-sm border border-stone-200 flex items-center justify-center relative rotate-3 hover:rotate-0 transition duration-500">
              <div className="absolute inset-4 border border-stone-100 flex flex-col items-center justify-center bg-[#FAFAF7] p-8 text-center">
                <span className="text-amber-800 font-serif italic text-3xl mb-4">Nuestra Boda</span>
                <div className="w-12 h-[1px] bg-amber-800/50 mb-4"></div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Recuerdos y Fotografías</p>
                <div className="mt-8 text-xs text-stone-400 font-serif italic max-w-[200px]">"El arte de maquetar momentos inolvidables."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Presupuesto */}
      <section id="contacto" className="py-24 px-6 bg-[#FAFAF7]">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="text-2xl font-light mb-2 text-stone-900 text-center">Solicitar Presupuesto</h3>
          <p className="text-center text-stone-500 mb-8 text-sm font-light">Completá tus datos y te responderemos a la brevedad.</p>
          
          <form action="https://formspree.io/f/xwlenbwg" method="POST" className="flex flex-col gap-4">
            <input type="text" name="nombre" placeholder="Tu Nombre y Apellido" required className="bg-[#FAFAF7] border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm" />
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required className="bg-[#FAFAF7] border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm" />
            
            <select name="tipo_servicio" className="bg-[#FAFAF7] border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm">
              <option value="solo_web">Solo Web Interactiva</option>
              <option value="web_tarjetas">Web + Tarjetas Físicas Híbridas</option>
              <option value="paquete_completo_libro">Paquete Completo + Libro Editorial Post-Evento</option>
            </select>
            
            <textarea name="mensaje" placeholder="Contame detalles sobre tu evento (fecha, locación, tipo de festejo)..." rows={4} className="bg-[#FAFAF7] border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm resize-none"></textarea>
            
            <button type="submit" className="bg-stone-900 hover:bg-amber-700 text-white font-medium text-sm tracking-wider uppercase py-4 rounded-xl transition duration-200 shadow-sm cursor-pointer mt-2">
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Pie de página y legales */}
      <footer className="p-8 text-center text-xs text-stone-500 border-t border-stone-200 bg-white">
        <p className="text-stone-800 font-medium mb-1">Soberanía Digital & Editorial — Software y Desarrollo a Medida</p>
        <p>Contacto: edicionesdemiantestino@gmail.com | WhatsApp: +54 9 280 484-1846</p>
        <p className="mt-4 text-stone-400">© {new Date().getFullYear()} Todos los derechos reservados. Desarrollado en Trelew, Chubut.</p>
      </footer>
    </main>
  );
}