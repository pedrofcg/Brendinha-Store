import { ProductCard } from './ProductCard';
import type { Product } from '../lib/store';

interface ProductGridProps {
  category?: string;
  isNewCollection?: boolean;
  isOffer?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Floral Midi',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000',
    category: 'Vestidos',
    description: 'Vestido midi com estampa floral e manga bufante',
    isNewCollection: true,
  },
  {
    id: '2',
    name: 'Blusa de Seda',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000',
    category: 'Blusas',
    description: 'Blusa de seda com laço na gola',
    isOffer: true,
    originalPrice: 249.90,
  },
  {
    id: '3',
    name: 'Calça Pantalona',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000',
    category: 'Calças',
    description: 'Calça pantalona de alfaiataria',
    isNewCollection: true,
  },
  {
    id: '4',
    name: 'Blazer Oversized',
    price: 399.90,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000',
    category: 'Blazers',
    description: 'Blazer oversized em alfaiataria premium',
    isOffer: true,
    originalPrice: 599.90,
  },
  {
    id: '5',
    name: 'Vestido Longo Cetim',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000',
    category: 'Vestidos',
    description: 'Vestido longo em cetim com fenda',
    isNewCollection: true,
  },
  {
    id: '6',
    name: 'Blusa Cropped',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000',
    category: 'Blusas',
    description: 'Blusa cropped com amarração',
    isOffer: true,
    originalPrice: 129.90,
  },
  {
    id: '7',
    name: 'Vestido Slip Dress',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000',
    category: 'Vestidos',
    description: 'Vestido slip dress em cetim',
    isNewCollection: true,
  },
  {
    id: '8',
    name: 'Calça Jeans Wide Leg',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000',
    category: 'Calças',
    description: 'Calça jeans wide leg com cintura alta',
    isOffer: true,
    originalPrice: 299.90,
  },
  {
    id: '9',
    name: 'Conjunto Alfaiataria',
    price: 499.90,
    image: 'https://letih.com.br/wp-content/uploads/2023/06/Facetune_11-06-2023-20-32-56.jpg',
    category: 'Conjuntos',
    description: 'Conjunto de blazer e calça em alfaiataria',
    isNewCollection: true,
  },
  {
    id: '10',
    name: 'Blusa Manga Bufante',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1000',
    category: 'Blusas',
    description: 'Blusa com manga bufante e decote princesa',
    isOffer: true,
    originalPrice: 229.90,
  },
  {
    id: '11',
    name: 'Vestido Tubinho',
    price: 329.90,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000',
    category: 'Vestidos',
    description: 'Vestido tubinho em crepe com fenda',
    isNewCollection: true,
  },
  {
    id: '12',
    name: 'Calça Social',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000',
    category: 'Calças',
    description: 'Calça social reta com pregas',
    isOffer: true,
    originalPrice: 319.90,
  }
];

export function ProductGrid({ category, isNewCollection, isOffer }: ProductGridProps) {
  const filteredProducts = products.filter((product) => {
    if (category) {
      return product.category === category;
    }
    if (isNewCollection) {
      return product.isNewCollection;
    }
    if (isOffer) {
      return product.isOffer;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}