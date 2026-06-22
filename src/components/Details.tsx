import type { Product } from '../types/product.types';

interface DetailsProps {
  product: Product;
}

export default function Details({ product }: DetailsProps) {
  const specs = product.details?.length
  ? product.details
  : [{ label: 'Category', value: product.category || 'N/A' }];

  const detailImage = product.images?.[1] || product.images?.[0] || product.imageUrl
    || 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800';

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* GAUCHE — SPECS */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#8B2635]" />
              <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
                Product Details
              </span>
            </div>

            <h2 className="text-3xl font-normal text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Everything you need
              <span className="block text-[#8B2635] italic">to know.</span>
            </h2>

            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between py-3 border-b border-gray-100 ${index === 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-[11px] tracking-widest uppercase text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                  {spec.label}
                </span>
                <span className="text-sm text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                  {spec.value}
                </span>
              </div>
            ))}

            <button
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-[#8B2635] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Order Now — ${product.price ?? 0}
            </button>
          </div>

          {/* DROITE — IMAGE */}
          <div>
            <img
              src={detailImage}
              alt={`${product.title} detail`}
              className="w-full h-80 object-cover mb-6"
            />

            {/* Tags réels du produit, remplace les "Available Colors" statiques */}
            {product.tags?.length > 0 && (
              <>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Tags
                </p>
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wide text-gray-600 border border-gray-200 px-3 py-1 rounded-full"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}