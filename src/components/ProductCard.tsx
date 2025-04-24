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
  const whatsappLink = `https://wa.me/5564981636063?text=${whatsappMessage}`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group"
      >
        <div 
          className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2 sm:mb-3 cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {product.isOffer && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent-terracotta text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
              {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
            </div>
          )}
        </div>
        <h3 
          className="text-sm sm:text-base font-medium text-primary-800 cursor-pointer hover:text-primary-600 transition-colors line-clamp-1"
          onClick={() => setIsPreviewOpen(true)}
        >
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
            <span className="text-sm sm:text-base font-semibold text-primary-800">
              R$ {product.price.toFixed(2)}
            </span>
            {product.isOffer && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                R$ {product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500/90 hover:bg-green-500 text-white p-1.5 sm:p-2 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
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