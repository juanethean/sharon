export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo / Nombre */}
            <div className="flex-shrink-0">
              <a href="#" className="font-serif text-2xl font-bold text-emerald-800 tracking-wide">
                Lic. Sharon
              </a>
            </div>
            
            {/* Enlaces de Navegación (Escritorio) */}
            <nav className="hidden md:flex space-x-8">
              <a href="#enfoque" className="text-gray-600 hover:text-emerald-800 font-medium transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-emerald-800 font-medium transition-colors">
                Contacto
              </a>
            </nav>
  
            {/* Botón de Acción Rápida */}
            <div>
              <a href="#contacto" className="bg-emerald-800 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-900 transition-colors shadow-sm text-sm md:text-base">
                Agendar
              </a>
            </div>
  
          </div>
        </div>
      </header>
    );
  }