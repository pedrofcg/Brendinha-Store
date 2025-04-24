import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState } from 'react';

const categories = [
  { name: 'Nova Coleção', path: '/nova-colecao' },
  { name: 'Vestidos', path: '/vestidos' },
  { name: 'Blusas', path: '/blusas' },
  { name: 'Calças', path: '/calcas' },
  { name: 'Acessórios', path: '/acessorios' },
  { name: 'Ofertas', path: '/ofertas' },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <Link to="/" className="text-2xl font-semibold text-primary-800">
            Brendinha Store
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        <nav className={cn(
          "md:py-4",
          isMenuOpen ? "block py-4" : "hidden md:block"
        )}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-2 md:space-y-0 text-sm">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block py-2 md:py-0 hover:text-primary-600 transition-colors",
                    location.pathname === category.path && "text-primary-800 font-medium",
                    category.name === 'Ofertas' && "text-accent-terracotta font-medium"
                  )}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}