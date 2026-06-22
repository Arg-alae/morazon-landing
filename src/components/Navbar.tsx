import { useState } from 'react';
import type { Product } from '../types/product.types';
import logo from '../assets/logo_morazon.png';
interface NavbarProps {
  product: Product;
}

export default function Navbar({ product }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Details', id: 'details' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Order', id: 'order' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <img
          src={logo}
          alt="Morazon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-7 cursor-pointer"
        />

        <div className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <span
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#8B2635] transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {item.label}
            </span>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block bg-[#8B2635] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#7a1f2d] transition-colors cursor-pointer"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Order Now — ${product.price ?? 0}
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-500">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navItems.map(item => (
            <span
              key={item.id}
              onClick={() => { document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}
              className="block text-xs tracking-widest uppercase text-gray-500 hover:text-[#8B2635] py-3 border-b border-gray-50 last:border-0 cursor-pointer"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {item.label}
            </span>
          ))}
          <button
            onClick={() => { document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}
            className="mt-4 w-full bg-[#8B2635] text-white text-xs tracking-widest uppercase py-3 cursor-pointer"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Order Now — ${product.price ?? 0}
          </button>
        </div>
      )}
    </nav>
  );
}