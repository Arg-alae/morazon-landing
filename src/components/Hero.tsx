import { useState } from 'react';

export default function Hero() {
  const [mainImage, setMainImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1600166898405-da9535204843?w=900',
    'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?w=900',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900',
    'https://images.unsplash.com/photo-1575414003709-3a15ebb5ee28?w=900',
  ];

  return (
    <section id="home" className="pt-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* GAUCHE — IMAGES */}
          <div>
            <div className="overflow-hidden mb-3 bg-gray-100">
              <img
                src={images[mainImage]}
                alt="Atlas Berber Rug"
                className="w-full h-[480px] object-cover transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`overflow-hidden cursor-pointer border-2 transition-colors ${
                    mainImage === i ? 'border-[#8B2635]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={src}
                    alt={`View ${i + 1}`}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DROITE — INFO */}
          <div className="sticky top-24">

            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#8B2635]" />
              <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
                Handwoven · Atlas Mountains · Morocco
              </span>
            </div>

            <h1 className="text-4xl font-normal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-gray-900">The Atlas </span>
              <span className="text-[#8B2635] italic block">Berber Rug.</span>
            </h1>

            {/* ETOILES */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#8B2635">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                4.9 (500+ reviews)
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              100% natural wool, hand-knotted over 3 weeks by master artisans in the High Atlas Mountains of Morocco. Each knot tells a story of tradition and craftsmanship.
            </p>

            {/* PRIX */}
            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-gray-100">
              <span className="text-3xl font-normal text-gray-900 tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                $285
              </span>
              <span className="text-lg text-gray-300 line-through tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                 $350
              </span>
            </div>
            {/* BOUTONS */}
            <button
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-[#8B2635] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer mb-3"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Order Now — $285
            </button>

            <button
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full border border-gray-200 text-gray-500 text-xs tracking-widest uppercase py-3 hover:border-gray-400 transition-colors cursor-pointer mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              View Full Details
            </button>

            {/* GARANTIES */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              {[
                'Free worldwide shipping — 7 to 14 days',
                'Certificate of authenticity included',
                'Only 3 left in stock — order today',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-xs text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}