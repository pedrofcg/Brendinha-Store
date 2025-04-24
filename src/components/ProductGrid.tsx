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
    name: 'Body Feminino',
    price: 299.90,
    image: '/images/01.webp',
    category: 'Vestidos',
    description: 'Body Feminino Decote Quadrado Alça Larga Regata Suplex Liso Casual',
    isNewCollection: true,
  },
  {
    id: '2',
    name: 'Blusa de Seda',
    price: 189.90,
    image: '/images/02.webp',
    category: 'Blusas',
    description: 'Blusa de seda com laço na gola',
    isOffer: true,
    originalPrice: 249.90,
  },
  {
    id: '3',
    name: 'Calça Pantalona',
    price: 259.90,
    image: '/images/03.webp',
    category: 'Calças',
    description: 'Calça pantalona de alfaiataria',
    isNewCollection: true,
  },
  {
    id: '4',
    name: 'Blazer Oversized',
    price: 399.90,
    image: '/images/04.webp',
    category: 'Blazers',
    description: 'Blazer oversized em alfaiataria premium',
    isOffer: true,
    originalPrice: 599.90,
  },
  {
    id: '5',
    name: 'Vestido Longo Cetim',
    price: 459.90,
    image: '/images/05.webp',
    category: 'Vestidos',
    description: 'Vestido longo em cetim com fenda',
    isNewCollection: true,
  },
  {
    id: '6',
    name: 'Blusa Cropped',
    price: 89.90,
    image: '/images/06.webp',
    category: 'Blusas',
    description: 'Blusa cropped com amarração',
    isOffer: true,
    originalPrice: 129.90,
  },
  {
    id: '7',
    name: 'Conjunto Saia e Cropped Franja Trico',
    price: 279.90,
    image: '/images/07.webp',
    category: 'Vestidos',
    description: 'Conjunto Croche Moda Praia',
    isNewCollection: true,
  },
  {
    id: '8',
    name: 'Calça Jeans Wide Leg',
    price: 199.90,
    image: '/images/08.webp',
    category: 'Calças',
    description: 'Calça jeans wide leg com cintura alta',
    isOffer: true,
    originalPrice: 299.90,
  },
  {
    id: '9',
    name: 'Conjunto Alfaiataria',
    price: 499.90,
    image: '/images/09.webp',
    category: 'Conjuntos',
    description: 'Conjunto de blazer e calça em alfaiataria',
    isNewCollection: true,
  },
  {
    id: '10',
    name: 'Blusa Manga Bufante',
    price: 159.90,
    image: '/images/10.webp',
    category: 'Blusas',
    description: 'Blusa com manga bufante e decote princesa',
    isOffer: true,
    originalPrice: 229.90,
  },
  {
    id: '11',
    name: 'Vestido Tubinho',
    price: 329.90,
    image: '/images/11.webp',
    category: 'Vestidos',
    description: 'Vestido tubinho em crepe com fenda',
    isNewCollection: true,
  },
  {
    id: '12',
    name: 'Calça Social',
    price: 219.90,
    image: '/images/12.webp',
    category: 'Calças',
    description: 'Calça social reta com pregas',
    isOffer: true,
    originalPrice: 319.90,
  },
  {
    id: '13',
    name: 'Calça Social',
    price: 219.90,
    image: '/images/13.webp',
    category: 'Calças',
    description: 'Calça social reta com pregas',
    isOffer: true,
    originalPrice: 319.90,
  },
  {
    id: '14',
    name: 'Calça Social',
    price: 219.90,
    image: '/images/14.webp',
    category: 'Calças',
    description: 'Calça social reta com pregas',
    isOffer: true,
    originalPrice: 319.90,
  },
  {
    id: '15',
    name: 'Vestido feminino c/ Amarração na Frente',
    price: 219.90,
    image: '/images/15.webp',
    category: 'Vestidos',
    description: 'Manga Longa Curto Suplex c/ Gola Alta Franzido Inverno',
    isOffer: true,
    originalPrice: 319.90,
  },
  {
    id: '16',
    name: 'Vestido de manga de bolha',
    price: 219.90,
    image: '/images/16.webp',
    category: 'Vestidos',
    description: 'Verão temperamento feminino europeu e americano',
    isOffer: true,
    originalPrice: 319.90,
  },
  {
    id: '17',
    name: 'Calça Social',
    price: 219.90,
    image: '/images/17.webp',
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
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
