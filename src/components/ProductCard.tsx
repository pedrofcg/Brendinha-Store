import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../lib/store';
import { ProductPreview } from './ProductPreview';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto: ${product.name}`
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group"
      >
        <div 
          className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {product.isOffer && (
            <div className="absolute top-4 right-4 bg-accent-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
              {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
            </div>
          )}
        </div>
        <h3 
          className="text-lg font-medium text-primary-800 cursor-pointer hover:text-primary-600 transition-colors"
          onClick={() => setIsPreviewOpen(true)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-primary-800">
              R$ {product.price.toFixed(2)}
            </span>
            {product.isOffer && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                R$ {product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500/90 hover:bg-green-500 text-white p-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Consultar</span>
          </a>
        </div>
      </motion.div>

      <ProductPreview
        product={product}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}