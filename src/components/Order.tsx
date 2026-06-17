import { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    color: 'Bordeaux',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* GAUCHE — PRODUIT */}
          <div className="bg-[#FAF9F7] p-8">
            <img
              src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=800"
              alt="Atlas Berber Rug"
              className="w-full h-52 object-cover mb-6"
            />

            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#8B2635]" />
              <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
                Secure Your Rug
              </span>
            </div>

            <h2 className="text-2xl font-normal text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              The Atlas Berber Rug
            </h2>
            <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              200 x 300 cm · 100% Natural Wool · Hand-knotted
            </p>

            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-gray-200">
              <span className="text-3xl font-normal text-gray-900 tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                $285
              </span>
              <span className="text-lg text-gray-300 line-through tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                $350
              </span>
            </div>

            <div className="space-y-3">
              {[
                'Free worldwide shipping',
                'Certificate of authenticity included',
                'Confirmed within 24 hours',
                'Only 3 left in stock',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-xs text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DROITE — FORMULAIRE */}
          <div>
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">

                <h3 className="text-2xl font-normal text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Place Your Order
                </h3>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-[#8B2635] transition-colors"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-[#8B2635] transition-colors"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-[#8B2635] transition-colors"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Color — <span className="text-gray-700 normal-case">{formData.color}</span>
                    </label>
                    <div className="flex gap-2 pb-2">
                      {[
                        { color: '#8B2635', name: 'Bordeaux' },
                        { color: '#C4A882', name: 'Camel' },
                        { color: '#2C3E50', name: 'Navy' },
                        { color: '#1a0a0d', name: 'Ebony' },
                        { color: '#F5F5DC', name: 'Ivory' },
                      ].map(item => (
                        <div
                          key={item.name}
                          onClick={() => setFormData({ ...formData, color: item.name })}
                          title={item.name}
                          className={`w-7 h-7 rounded-full cursor-pointer hover:scale-110 transition-transform border-2 border-white shadow-md ${
                            formData.color === item.name ? 'ring-2 ring-offset-1 ring-[#8B2635]' : ''
                          }`}
                          style={{ backgroundColor: item.color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none focus:border-[#8B2635] transition-colors cursor-pointer"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {['1', '2', '3'].map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B2635] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any special requests..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-[#8B2635] transition-colors resize-none"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-xs tracking-widest uppercase text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>Total</span>
                  <span className="text-2xl font-normal text-gray-900 tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                    ${(285 * parseInt(formData.quantity)).toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B2635] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Place My Order — ${(285 * parseInt(formData.quantity)).toFixed(2)}
                </button>

                <p className="text-center text-[11px] text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                  We'll confirm your order within 24 hours.
                </p>

              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Order Received!
                </h3>
                <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  Thank you, {formData.name}.
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                  We'll confirm at <span className="text-[#8B2635]">{formData.email}</span> within 24 hours.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}