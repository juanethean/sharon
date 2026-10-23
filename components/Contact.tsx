export default function Contact() {
    return (
      <section id="contacto" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Agenda tu primera sesión y comencemos a trabajar en ti.
          </p>
          
          <a
            href="https://wa.me/56900000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-800 text-white font-medium px-10 py-4 rounded-full hover:bg-emerald-900 transition-colors shadow-lg hover:shadow-xl"
          >
            Agendar por WhatsApp
          </a>
        </div>
        
        <footer className="mt-24 border-t border-stone-200 pt-8 text-center text-stone-500 text-sm pb-8">
          <p>Psicología Clínica • Lic. Sharon [Apellido]</p>
          <p className="mt-2">Atención presencial y Online</p>
        </footer>
      </section>
    );
  }