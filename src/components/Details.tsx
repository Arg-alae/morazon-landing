export default function Details() {
  const specs = [
    { label: 'Dimensions', value: '200 x 300 cm (6.5 x 9.8 ft)' },
    { label: 'Material', value: '100% Natural Wool' },
    { label: 'Dyes', value: 'Natural — Pomegranate, Saffron, Indigo' },
    { label: 'Technique', value: 'Hand-knotted Berber' },
    { label: 'Weight', value: '4.5 kg' },
    { label: 'Origin', value: 'Atlas Mountains, Morocco' },
    { label: 'Care', value: 'Dry clean recommended' },
  ];

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
              Order Now — $285
            </button>
          </div>

          {/* DROITE — IMAGE + COULEURS */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=800"
              alt="Rug detail"
              className="w-full h-80 object-cover mb-6"
            />

            <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Available Colors
            </p>
            <div className="flex items-center gap-3 mb-6">
              {[
                { color: '#8B2635', name: 'Bordeaux' },
                { color: '#C4A882', name: 'Camel' },
                { color: '#2C3E50', name: 'Navy' },
                { color: '#1a0a0d', name: 'Ebony' },
                { color: '#F5F5DC', name: 'Ivory' },
              ].map(item => (
                <div key={item.name} className="group relative">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>

            {/* 3 POINTS FORTS */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              {[
                { title: '40,000+ Knots', desc: 'Every rug contains over 40,000 hand-tied knots.' },
                { title: '3 Weeks to Create', desc: 'Each piece takes 3 weeks of dedicated craftsmanship.' },
                { title: 'Atlas Mountains', desc: 'Sourced and made entirely in Morocco.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#8B2635] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-normal text-gray-900 mr-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                      — {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}