import { useState } from 'react';
import Header from './components/Header';
import EVChargingPage from './pages/EVChargingPage';
import FuelPricePage from './pages/FuelPricePage';

export default function App() {
  const [activeTab, setActiveTab] = useState('ev');

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === 'ev' && <EVChargingPage />}
        {activeTab === 'fuel' && <FuelPricePage />}
      </main>
      {/* Footer */}
      <footer className="text-center py-6 px-4 mt-8">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} FueVolt — Australian EV & Fuel Price Finder
        </p>
        <p className="text-[10px] text-gray-600 mt-1">
          EV data powered by Open Charge Map • Fuel prices are indicative
        </p>
      </footer>
    </div>
  );
}
