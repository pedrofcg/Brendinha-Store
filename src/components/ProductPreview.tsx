import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../lib/store';

interface ProductPreviewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductPreview({ product, isOpen, onClose }: ProductPreviewProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizes = ['P', 'M', 'G'];
  const images = [product.image, ...(product.images || [])];

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto: ${product.name}${selectedSize ? ` - Tamanho ${selectedSize}` : ''}`
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 md:bottom-auto md:left-1/2 md:top-1/2 
              md:-translate-x-1/2 md:-translate-y-1/2 w-full md:max-w-4xl 
              bg-white p-4 rounded-t-2xl md:rounded-lg shadow-xl z-50 
              max-h-[90vh] overflow-y-auto"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => info.offset.y > 100 && onClose()}
          >
            {/* Swipe indicator for mobile */}
            <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2" />
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
              {/* Image Section */}
              <div className="space-y-4">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <img
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  {product.isOffer && (
                    <div className="absolute top-2 right-2 bg-accent-terracotta text-white px-2 py-1 rounded-full text-xs md:text-sm">
                      {Math.round(((product.originalPrice! - product.price) / product.originalPrice! * 100))}% OFF
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 px-1">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="min-w-[60px] aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent"
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                        {currentImageIndex === index && (
                          <div className="absolute inset-0 border-2 border-primary-800 rounded-md" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="space-y-4 md:space-y-6">
                <div className="pr-8 relative">
                  <Dialog.Title className="text-xl md:text-2xl font-medium text-primary-800">
                    {product.name}
                  </Dialog.Title>
                  <Dialog.Close className="md:hidden absolute -top-2 -right-2 p-2 text-gray-500">
                    <X className="w-6 h-6" />
                  </Dialog.Close>
                </div>

                <p className="text-gray-600 text-sm md:text-base">{product.description}</p>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-xl md:text-2xl font-semibold text-primary-800">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.isOffer && (
                    <span className="text-gray-500 text-sm md:text-base line-through">
                      R$ {product.originalPrice?.toFixed(2)}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Tamanhos disponíveis</h3>
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg border-2 flex items-center 
                          justify-center text-sm md:text-base transition-colors ${
                            selectedSize === size
                              ? 'border-primary-800 text-primary-800'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 
                    rounded-lg font-medium transition-colors flex items-center 
                    justify-center gap-2 text-sm md:text-base"
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Consultar disponibilidade</span>
                </a>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
