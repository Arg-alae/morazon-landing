import type { Product } from '../types/product.types';

interface GalleryProps {
  product: Product;
}

export default function Gallery({ product }: GalleryProps) {
  const fallbackImages = [
    'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600',
    'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600',
  ];

  const galleryImages = product.images?.length > 0 ? product.images : fallbackImages;

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#8B2635]" />
            <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
              Gallery
            </span>
            <div className="w-6 h-px bg-[#8B2635]" />
          </div>
          <h2 className="text-3xl font-normal text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            See it in your <span className="text-[#8B2635] italic">home.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {galleryImages.slice(0, 4).map((src, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={src}
                alt={`${product.title} view ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-80' : 'h-48 md:h-80'}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          {product.stock > 0 && product.stock <= 5 && (
            <p className="text-sm text-gray-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Only <span className="text-[#8B2635]">{product.stock} left</span> — don't miss your chance.
            </p>
          )}
          <button
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8B2635] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Order Now — ${product.price ?? 0}
          </button>
        </div>

      </div>
    </section>
  );
}