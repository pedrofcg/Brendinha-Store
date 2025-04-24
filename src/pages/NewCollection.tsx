import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { motion } from 'framer-motion';

export function NewCollection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12"
      >
        <h1 className="text-4xl font-light text-primary-800 mb-8">Nova Coleção</h1>
        <ProductGrid isNewCollection />
      </motion.div>
    </div>
  );
}