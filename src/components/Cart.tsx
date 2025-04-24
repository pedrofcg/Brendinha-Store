import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../lib/store';

export function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="relative hover:text-primary-600 transition-colors">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-accent-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {items.length}
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[100]" />
        <Dialog.Content
          asChild
          className="fixed right-0 top-0 h-screen w-full max-w-md bg-white p-6 shadow-xl z-[101]"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-lg font-semibold">
                Carrinho de Compras
              </Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-4 border-b border-gray-100 pb-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">
                      R$ {item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 ? (
              <div className="mt-6 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between text-lg font-semibold mb-4">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary-800 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Finalizar Compra
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
                <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
                <p className="text-lg">Seu carrinho está vazio</p>
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}