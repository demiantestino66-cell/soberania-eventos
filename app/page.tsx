'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col justify-between overflow-hidden">
      {/* Barra superior */}
      <header className="p-6 flex justify-between items-center border-b border-slate-800 max-w-6xl mx-auto w-full">
        <h1 className="text-xl font-bold tracking-wider text-amber-400">SOBERANÍA DIGITAL</h1>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#servicios" className="hover:text-amber-400 transition">Servicios</a>
          <a href="#casos" className="hover:text-amber-400 transition">Casos de Éxito</a>
          <a href="#legales" className="hover:text-amber-400 transition">Bases y Legales</a>
          <a href="#contacto" className="hover:text-amber-400 transition">Contacto</a>
        </nav>
      </header>

      {/* Hero Section con animación de entrada */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 max-w-4xl mx-auto"
      >
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest font-semibold">
          Desarrollo Web Exclusivo para Eventos
        </span>
        
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Invitaciones y Webs Interactivas a Medida
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
          Casamientos, cumpleaños de 15 y celebraciones. Brindá una experiencia única con confirmación en tiempo real (RSVP) y control total de tu evento.
        </p>

        {/* Botones de acción directa con tus datos */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href="https://wa.me/5492804841846?text=Hola%20Demián,%20estuve%20viendo%20la%20web%20de%20Soberanía%20Digital%20y%20quiero%20consultar%20por%20una%20web%20para%20mi%20evento." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl transition duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            💬 WhatsApp Directo
          </a>
          
          <a 
            href="mailto:edicionesdemiantestino@gmail.com"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 px-8 rounded-xl border border-slate-700 transition duration-200 flex items-center justify-center gap-2"
          >
            📧 Email Personal
          </a>
        </div>
      </motion.section>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-20 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-amber-400">¿Qué ofrecemos a nuestros clientes?</h3>
          <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">Cada desarrollo se programa a medida, adaptado 100% a la identidad de tu evento.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Casamientos */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-amber-500/50 transition duration-300">
              <div className="w-24 h-24 mb-4 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border border-slate-700 shadow-inner">
                <img src="/imagenes/casamiento.png" alt="Casamiento" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-amber-300">Casamientos</h4>
              <p className="text-slate-400 text-sm">Web exclusiva con cuenta regresiva, historia de la pareja, RSVP de invitados, restricciones alimentarias y sección de regalos / CBU.</p>
            </div>
            
            {/* Cumpleaños de 15 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-amber-500/50 transition duration-300">
              <div className="w-24 h-24 mb-4 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border border-slate-700 shadow-inner">
                <img src="/imagenes/quince.png" alt="Cumpleaños de 15" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-amber-300">Cumpleaños de 15</h4>
              <p className="text-slate-400 text-sm">Diseño vibrante e interactivo, galería multimedia para que los invitados suban fotos, playlist colaborativa y pases digitales.</p>
            </div>

            {/* Eventos Generales */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-amber-500/50 transition duration-300">
              <div className="w-24 h-24 mb-4 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border border-slate-700 shadow-inner">
                <img src="/imagenes/eventos.png" alt="Eventos en General" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-amber-300">Eventos en General</h4>
              <p className="text-slate-400 text-sm">Plataformas a medida para celebraciones sociales o corporativas, con control de acceso, formularios y soporte técnico dedicado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Casos de Éxito / Demostración */}
      <section id="casos" className="py-20 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Prueba Real de Calidad</span>
          <h3 className="text-3xl font-bold mt-2 mb-4 text-white">Casos de Éxito</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">Mirá cómo resolvemos las invitaciones interactivas. Diseños reales puestos en marcha para celebraciones reales.</p>
          
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-left flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Proyecto Destacado
              </span>
              <h4 className="text-2xl font-bold mt-4 mb-2 text-amber-300">¡Nos Casamos! — Invitación Interactiva a Medida</h4>
              <p className="text-slate-400 text-sm mb-6">
                Plataforma web desarrollada íntegramente con cuenta regresiva en tiempo real, gestión inteligente de invitados (RSVP), historias de pareja y pasarela de regalos integrada. Cero plantillas genéricas: desarrollo exclusivo.
              </p>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold py-2.5 px-6 rounded-xl border border-slate-700 text-sm transition"
              >
                🔗 Ver Demostración en Vivo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Formulario de Contacto Real (Con Formspree) */}
      <section id="contacto" className="py-20 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold mb-2 text-amber-400 text-center">Solicitar Presupuesto</h3>
          <p className="text-center text-slate-400 mb-8 text-sm">Completá tus datos y te responderemos a la brevedad.</p>
          
          <form action="https://formspree.io/f/xwlenbwg" method="POST" className="flex flex-col gap-4">
            <input type="text" name="nombre" placeholder="Tu Nombre y Apellido" required className="bg-slate-950 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-amber-400" />
            <input type="email" name="email" placeholder="Tu Correo Electrónico" required className="bg-slate-950 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-amber-400" />
            
            <select name="tipo_evento" className="bg-slate-950 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-amber-400">
              <option value="casamiento">Casamiento</option>
              <option value="quince">Cumpleaños de 15</option>
              <option value="general">Otro Evento / Celebración</option>
            </select>
            
            <textarea name="mensaje" placeholder="Contame detalles sobre tu evento (fecha estimada, ideas, etc.)..." rows={4} className="bg-slate-950 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-amber-400"></textarea>
            
            <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3.5 rounded-lg transition duration-200 shadow-lg cursor-pointer">
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Sección de Bases Legales y Condiciones */}
      <section id="legales" className="py-20 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-amber-400">Bases, Términos y Condiciones Legales</h3>
          <div className="text-sm text-slate-400 space-y-4 bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <p><strong>1. Contratación y Seña:</strong> Todo desarrollo se reserva y comienza a programarse una vez abonada la seña estipulada del valor total acordado.</p>
            <p><strong>2. Plazos y Revisiones:</strong> Los tiempos de entrega se definen según la complejidad del proyecto. El servicio incluye las revisiones necesarias para asegurar conformidad total antes de su publicación oficial.</p>
            <p><strong>3. Privacidad de Datos:</strong> Los datos recopilados de los invitados mediante los sistemas interactivos son propiedad exclusiva del cliente y se gestionan bajo estrictas normas de seguridad.</p>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="p-8 text-center text-xs text-slate-500 border-t border-slate-800 bg-slate-950">
        <p className="text-slate-300 mb-2 font-medium">Soberanía Digital — Software y Desarrollo a Medida</p>
        <p>Contacto directo: edicionesdemiantestino@gmail.com | WhatsApp: +54 9 280 484-1846</p>
        <p className="mt-4">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}