"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "¿Cuánto dura cada sesión?", answer: "Las sesiones tienen una duración estándar de 50 a 60 minutos." },
  { question: "¿Emites boleta para reembolso en Isapre?", answer: "Sí, emito boleta de honorarios para que puedas gestionar el reembolso directamente con tu Isapre o seguro complementario." },
  { question: "¿Cuáles son las formas de pago?", answer: "El pago se realiza vía transferencia electrónica previo al inicio de cada sesión." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 relative z-10">
      <div className="px-4 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-emerald-900 mb-10"
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-emerald-50 flex justify-between items-center font-medium text-slate-800 transition-colors"
              >
                {faq.question}
                <span className="text-emerald-700 font-bold text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}