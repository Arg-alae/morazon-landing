import { useState } from 'react';
import type { Product } from '../types/product.types';
import { createOrder } from '../services/api';

interface OrderProps {
  product: Product;
}

export default function Order({ product }: OrderProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const price = product.price ?? 0;
  const total = price * parseInt(formData.quantity);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await createOrder({
        productId: product.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        quantity: parseInt(formData.quantity),
        message: formData.message || undefined,
      });
      setSent(true);
    } catch (err) {
      console.error('Order creation failed', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const productImage = product.images?.[0] || product.imageUrl
    || 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800';

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* GAUCHE — PRODUIT */}
          <div className="bg-[#FAF9F7] p-8">
            <img
              src={productImage}
              alt={product.title}
              className="w-full h-52 object-cover mb-6"
            />

            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#8B2635]" />
              <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
                Secure Your Order
              </span>
            </div>

            <h2 className="text-2xl font-normal text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              {product.title}
            </h2>
            <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {product.category} {product.weight ? `· ${product.weight} kg` : ''}
            </p>

            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-gray-200">
              <span className="text-3xl font-normal text-gray-900 tabular-nums" style={{ fontFamily: 'Georgia, serif' }}>
                ${price}
              </span>
            </div>

            <div className="space-y-3">
              {[
                'Free worldwide shipping',
                'Certificate of authenticity included',
                'Confirmed within 24 hours',
                product.stock > 0 ? `${product.stock} in stock` : 'Out of stock',
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
                    ${total.toFixed(2)}
                  </span>
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#8B2635] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer disabled:opacity-50"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {submitting ? 'Placing order...' : `Place My Order — $${total.toFixed(2)}`}
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