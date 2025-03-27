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
  const images = [
    product.image,
    ...(product.images || []),
  ];

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto: ${product.name}${selectedSize ? ` - Tamanho ${selectedSize}` : ''}`
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 hidden md:block" />
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="hidden md:block fixed left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] sm:max-w-4xl bg-white p-4 sm:p-6 rounded-lg shadow-xl z-50 h-auto overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-2xl font-medium text-primary-800">
                {product.name}
              </Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </Dialog.Close>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg w-full sm:w-72">
                  <img
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  {product.isOffer && (
                    <div className="absolute top-4 right-4 bg-accent-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                      {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                    </div>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="relative w-16 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-primary-800 transition"
                      >
                        <img
                          src={image}
                          alt={`${product.name} - Imagem ${index + 1}`}
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

              <div className="space-y-6">
                <div>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div>
                  <span className="text-2xl font-semibold text-primary-800">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.isOffer && (
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      R$ {product.originalPrice?.toFixed(2)}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Tamanhos disponíveis</h3>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-medium transition-colors ${
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
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
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

