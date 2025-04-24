import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { motion } from 'framer-motion';

interface CategoryPageProps {
  category: string;
}

export function CategoryPage({ category }: CategoryPageProps) {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 md:py-12"
      >
        <h1 className="text-3xl md:text-4xl font-light text-primary-800 mb-8">{category}</h1>
        <ProductGrid category={category} />
      </motion.div>
    </div>
  );
}