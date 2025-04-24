import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Vestidos', path: '/vestidos',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000',
  },
  {
    name: 'Blusas', path: '/blusas',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000',
  },
  {
    name: 'Calças', path: '/calcas',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000',
  },
  {
    name: 'Acessórios', path: '/acessorios',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000',
  },
];

export function Categories() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl text-center font-light text-primary-800 mb-8 sm:mb-12">
          Encontre o look perfeito para qualquer ocasião
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={category.path}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <h3 className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white text-base sm:text-xl font-medium">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
