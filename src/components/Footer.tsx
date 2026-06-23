import logo from '../assets/logo_morazon.png';

export default function Footer() {
  return (
    <footer className="bg-[#2D0E14] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="Morazon"
              className="h-6 mb-3"
              style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(54%) saturate(2878%) hue-rotate(330deg) brightness(75%) contrast(95%)' }}
            />
            <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Authentic Moroccan artisanal rugs. Bringing the soul of Morocco to your home.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-4 h-px bg-white/40" />
              <h3 className="text-[10px] tracking-widest uppercase text-white/70" style={{ fontFamily: 'Georgia, serif' }}>
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Details', id: 'details' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Order Now', id: 'order' },
              ].map(item => (
                <li key={item.label}>
                  <span
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-4 h-px bg-white/40" />
              <h3 className="text-[10px] tracking-widest uppercase text-white/70" style={{ fontFamily: 'Georgia, serif' }}>
                Contact
              </h3>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="text-xs text-white/40" style={{ fontFamily: 'Georgia, serif' }}>contact@morazon.com</li>
              <li className="text-xs text-white/40" style={{ fontFamily: 'Georgia, serif' }}>+212 600 000 000</li>
              <li className="text-xs text-white/40" style={{ fontFamily: 'Georgia, serif' }}>Tamesna, Morocco</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/30" style={{ fontFamily: 'Georgia, serif' }}>© 2026 Morazon. All rights reserved.</p>
          <p className="text-[11px] text-white/30" style={{ fontFamily: 'Georgia, serif' }}>Handcrafted in Morocco</p>
        </div>

      </div>
    </footer>
  );
}