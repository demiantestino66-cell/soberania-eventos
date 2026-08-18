'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-stone-900 flex flex-col justify-between selection:bg-amber-200 selection:text-stone-900 font-sans">
      
      {/* Barra de Navegación Minimalista */}
      <header className="sticky top-0 z-50 px-6 py-4 bg-[#FAFAF7]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-sm font-bold tracking-[0.2em] text-stone-900 uppercase">
            Soberanía Digital <span className="text-amber-600 font-normal">| Eventos</span>
          </h1>
          <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium text-stone-600">
            <a href="#servicios" className="hover:text-amber-700 transition">Paquetes</a>
            <a href="#casos" className="hover:text-amber-700 transition">Casos de Éxito</a>
            <a href="#legales" className="hover:text-amber-700 transition">Legales</a>
            <a href="#contacto" className="hover:text-amber-700 transition">Contacto</a>
          </nav>
          <a 
            href="#contacto" 
            className="bg-stone-900 hover:bg-amber-700 text-white text-xs font-medium tracking-wider uppercase py-2.5 px-5 rounded-full transition shadow-sm"
          >
            Reservar Fecha
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto"
      >
        <span className="text-amber-700 font-semibold text-xs tracking-[0.25em] uppercase mb-4 block">
          Software y Desarrollo a Medida
        </span>
        
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 mb-6 leading-[1.1]">
          Invitaciones Digitales <span className="font-normal italic font-serif block mt-1 text-amber-800">e Integrales para Eventos</span>
        </h2>
        
        <p className="text-stone-600 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
          Casamientos, cumpleaños de 15 y celebraciones. Combinamos tecnología interactiva avanzada (RSVP en tiempo real) con diseño exclusivo y papelería física opcional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href="https://wa.me/5492804841846?text=Hola%20Demián,%20estuve%20viendo%20la%20web%20de%20Soberanía%20Digital%20y%20quiero%20consultar%20por%20un%20paquete%20para%20mi%20evento." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm py-4 px-8 rounded-2xl transition shadow-md flex items-center justify-center gap-2"
          >
            💬 Consultar por WhatsApp
          </a>
          
          <a 
            href="#servicios"
            className="bg-white hover:bg-stone-100 text-stone-900 font-medium text-sm py-4 px-8 rounded-2xl border border-stone-300 transition flex items-center justify-center gap-2 shadow-sm"
          >
            Ver Paquetes y Precios
          </a>
        </div>
      </motion.section>

      {/* Sección de Paquetes y Servicios Integrales */}
      <section id="servicios" className="py-24 px-6 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase block mb-2">Planes a Medida</span>
            <h3 className="text-3xl md:text-4xl font-light text-stone-900">Elegí la experiencia para tu evento</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Digital Esencial */}
            <div className="bg-[#FAFAF7] p-8 rounded-3xl border border-stone-200 flex flex-col justify-between hover:shadow-lg transition duration-300">
              <div>
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Esencial</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-stone-900">Web Interactiva</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Ideal para una comunicación moderna y directa con tus invitados.
                </p>
                <ul className="text-xs text-stone-600 space-y-3 mb-8">
                  <li>✓ Cuenta regresiva en tiempo real</li>
                  <li>✓ Sistema RSVP (Confirmación de asistencia)</li>
                  <li>✓ Sección de Regalos / CBU / Alias</li>
                  <li>✓ Diseño 100% personalizado</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-stone-900 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-700 transition">
                Seleccionar Plan
              </a>
            </div>
            
            {/* Plan Híbrido (Destacado con Papelería Física) */}
            <div className="bg-stone-900 text-white p-8 rounded-3xl border border-stone-900 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-bl-xl">
                Más Elegido
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Híbrido Premium</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-white">Web + Tarjetas Físicas QR</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Lo mejor de ambos mundos: la elegancia del papel impreso unida a la tecnología digital.
                </p>
                <ul className="text-xs text-stone-300 space-y-3 mb-8">
                  <li>✓ Todo lo incluído en la Web Interactiva</li>
                  <li>✓ Diseño y confección de tarjetas físicas minimalistas</li>
                  <li>✓ Código QR único vinculado directo a la web</li>
                  <li>✓ Galería multimedia colaborativa para fotos de invitados</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-amber-600 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-500 transition">
                Seleccionar Plan
              </a>
            </div>

            {/* Plan Integral Total */}
            <div className="bg-[#FAFAF7] p-8 rounded-3xl border border-stone-200 flex flex-col justify-between hover:shadow-lg transition duration-300">
              <div>
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Experiencia Total</span>
                <h4 className="text-2xl font-medium mt-2 mb-4 text-stone-900">15 Años / Bodas Pro</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Solución integral avanzada con herramientas extendidas para el salón y organización.
                </p>
                <ul className="text-xs text-stone-600 space-y-3 mb-8">
                  <li>✓ Web Interactiva de alta complejidad</li>
                  <li>✓ Kit completo de gráficas para Redes Sociales</li>
                  <li>✓ Código QR interactivo para pantallas en el salón</li>
                  <li>✓ Asesoramiento técnico y soporte dedicado</li>
                </ul>
              </div>
              <a href="#contacto" className="block text-center bg-stone-900 text-white text-xs font-medium py-3 rounded-xl uppercase tracking-wider hover:bg-amber-700 transition">
                Seleccionar Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito / Demostración */}
      <section id="casos" className="py-24 px-6 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase block mb-2">Prueba Real de Calidad</span>
          <h3 className="text-3xl md:text-4xl font-light mb-4 text-stone-900">Casos de Éxito</h3>
          <p className="text-stone-600 mb-12 max-w-xl mx-auto font-light">Mirá cómo resolvemos las invitaciones interactivas. Diseños reales puestos en marcha para celebraciones reales.</p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 text-left flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <div className="flex-1">
              <span className="bg-amber-100 text-amber-800 text-[10px] tracking-widest px-3.5 py-1.5 rounded-full uppercase font-semibold">
                Proyecto Destacado
              </span>
              <h4 className="text-2xl font-medium mt-4 mb-3 text-stone-900">¡Nos Casamos! — Invitación Interactiva a Medida</h4>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Plataforma web desarrollada íntegramente con cuenta regresiva en tiempo real, gestión inteligente de invitados (RSVP), historias de pareja y pasarela de regalos integrada. Cero plantillas genéricas: desarrollo exclusivo.
              </p>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-stone-900 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-xl text-xs tracking-wider uppercase transition shadow-sm"
              >
                🔗 Ver Demostración en Vivo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Formulario de Presupuesto */}
      <section id="contacto" className="py-24 px-6 bg-white border-t border-stone-200">
        <div className="max-w-2xl mx-auto bg-[#FAFAF7] p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="text-2xl font-light mb-2 text-stone-900 text-center">Solicitar Presupuesto</h3>
          <p className="text-center text-stone-500 mb-8 text-sm font-light">Completá tus datos y te responderemos a la brevedad.</p>
          
          <form action="https://formspree.io/f/xwlenbwg" method="POST" className="flex flex-col gap-4">
            <input type="text" name="nombre" placeholder="Tu Nombre y Apellido" required className="bg-white border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm" />
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required className="bg-white border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm" />
            
            <select name="tipo_evento" className="bg-white border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm">
              <option value="esencial">Plan Esencial (Web Interactiva)</option>
              <option value="hibrido">Plan Híbrido (Web + Tarjetas Físicas QR)</option>
              <option value="integral">Plan Experiencia Total (15 Años / Bodas Pro)</option>
            </select>
            
            <textarea name="mensaje" placeholder="Contame detalles sobre tu evento (fecha estimada, cantidad de invitados, etc.)..." rows={4} className="bg-white border border-stone-300 p-4 rounded-xl text-stone-900 focus:outline-none focus:border-amber-700 transition text-sm resize-none"></textarea>
            
            <button type="submit" className="bg-stone-900 hover:bg-amber-700 text-white font-medium text-sm tracking-wider uppercase py-4 rounded-xl transition duration-200 shadow-sm cursor-pointer mt-2">
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Sección de Bases Legales y Condiciones */}
      <section id="legales" className="py-20 px-6 bg-[#FAFAF7] border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-light mb-6 text-stone-900">Bases, Términos y Condiciones Legales</h3>
          <div className="text-xs text-stone-600 space-y-4 bg-white p-8 rounded-3xl border border-stone-200 leading-relaxed">
            <p><strong>1. Contratación y Seña:</strong> Todo desarrollo se reserva y comienza a programarse una vez abonada la seña estipulada del valor total acordado.</p>
            <p><strong>2. Plazos y Revisiones:</strong> Los tiempos de entrega se definen según la complejidad del proyecto. El servicio incluye las revisiones necesarias para asegurar conformidad total antes de su publicación oficial.</p>
            <p><strong>3. Privacidad de Datos:</strong> Los datos recopilados de los invitados mediante los sistemas interactivos son propiedad exclusiva del cliente y se gestionan bajo estrictas normas de seguridad.</p>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="p-8 text-center text-xs text-stone-500 border-t border-stone-200 bg-white">
        <p className="text-stone-800 font-medium mb-1">Soberanía Digital — Software y Desarrollo a Medida</p>
        <p>Contacto directo: edicionesdemiantestino@gmail.com | WhatsApp: +54 9 280 484-1846</p>
        <p className="mt-4 text-stone-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}