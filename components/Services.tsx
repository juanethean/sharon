export default function Services() {
    return (
      <section id="enfoque" className="py-20 relative overflow-hidden">
        {/* Contenedor principal elevado sobre el Canvas 3D global */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Mis Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Te acompaño a través de diferentes modalidades adaptadas a tus necesidades actuales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terapia Individual</h3>
              <p className="text-gray-600">Un espacio confidencial para explorar tus emociones, superar bloqueos y construir tu bienestar.</p>
            </div>
            
            {/* Tarjeta 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terapia de Pareja</h3>
              <p className="text-gray-600">Herramientas para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo.</p>
            </div>
            
            {/* Tarjeta 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atención Online</h3>
              <p className="text-gray-600">Sesiones terapéuticas desde la comodidad de tu hogar, con la misma cercanía y efectividad.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }