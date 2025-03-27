import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  const whatsappLink = "https://wa.me/5511999999999";

  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Descubra a Elegância que Você Merece
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Nova coleção com peças exclusivas para mulheres que valorizam estilo e conforto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500/90 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale Conosco</span>
            </a>
            <button className="bg-white/90 hover:bg-white text-primary-800 px-6 py-3 rounded-lg font-medium transition-colors">
              Explore a Coleção
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}