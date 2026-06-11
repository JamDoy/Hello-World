import { useState } from 'react';

const TABS = [
  { id: 'ev', label: 'EV Charging', icon: '⚡' },
  { id: 'fuel', label: 'Fuel Prices', icon: '⛽' },
];

export default function Header({ activeTab, onTabChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 px-4 py-3"
      style={{ background: 'linear-gradient(135deg, #1A6FDB 0%, #0D2B5E 100%)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{
              background: 'linear-gradient(135deg, #C8971F, #FFD700)',
              color: '#0D2B5E',
            }}
          >
            FV
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Fue<span style={{ color: '#FFD700' }}>Volt</span>
          </span>
        </div>

        {/* Desktop Tabs */}
        <nav className="hidden md:flex items-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="px-5 py-2 rounded-xl text-sm font-semibold cursor-pointer"
              style={{
                transition: 'all 0.25s ease',
                ...(activeTab === tab.id
                  ? {
                      background: 'linear-gradient(135deg, #2ECC71, #27AE60)',
                      color: '#FFFFFF',
                      boxShadow: '0 0 12px rgba(46, 204, 113, 0.3)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.1)',
                      color: '#FFFFFF',
                    }),
              }}
            >
              <span className="mr-1.5">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          style={{ background: 'none', border: 'none' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                setMenuOpen(false);
              }}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-left cursor-pointer"
              style={{
                transition: 'all 0.25s ease',
                ...(activeTab === tab.id
                  ? {
                      background: 'linear-gradient(135deg, #2ECC71, #27AE60)',
                      color: '#FFFFFF',
                    }
                  : {
                      background: 'rgba(255,255,255,0.08)',
                      color: '#FFFFFF',
                    }),
              }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
