"use client";
import { motion } from "framer-motion";
import EsferaInteractiva from "./EsferaInteractiva";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-6 z-10"
        >
          <p className="text-emerald-700 font-bold tracking-widest text-xs uppercase">
            Psicología Clínica • Lic. Sharon
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Un espacio seguro para cuidar tu bienestar emocional
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Acompañamiento profesional, cálido y confidencial para atravesar procesos de ansiedad, duelo, autoestima y relaciones con más claridad y calma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-emerald-800 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors shadow-lg">
              Agendar Consulta
            </button>
            <button className="border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors">
              Conocer el enfoque
            </button>
          </div>
        </motion.div>
        
        {/* Columna 3D (Reemplaza a la imagen) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <EsferaInteractiva />
        </motion.div>

      </div>
    </section>
  );
}