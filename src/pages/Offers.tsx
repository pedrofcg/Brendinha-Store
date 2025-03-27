import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { motion } from 'framer-motion';

export function Offers() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 md:py-12"
      >
        <h1 className="text-3xl md:text-4xl font-light text-primary-800 mb-8">Ofertas</h1>
        <div className="bg-accent-rose/10 p-4 md:p-8 rounded-lg mb-8 md:mb-12">
          <p className="text-xl md:text-2xl text-center text-primary-800">
            Aproveite até 50% de desconto em produtos selecionados
          </p>
        </div>
        <ProductGrid isOffer />
      </motion.div>
    </div>
  );
}