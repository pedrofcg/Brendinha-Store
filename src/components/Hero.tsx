import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const whatsappLink = "https://wa.me/5564981636063?text=Olá! Gostaria de saber mais sobre a coleção.";

  return (
    <section className="relative h-[80vh] sm:h-screen flex items-center">
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
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">
            Descubra a Elegância que Você Merece
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-100">
            Nova coleção com peças exclusivas para mulheres que valorizam estilo e conforto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500/90 hover:bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale Conosco</span>
            </a>
            <Link
              to="/nova-colecao"
              className="bg-white/90 hover:bg-white text-primary-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Explore a Coleção
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
