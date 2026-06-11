export default function FuelStationCard({ station, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl p-4 cursor-pointer"
      style={{
        background: '#0D2B5E',
        border: isSelected ? '1px solid #2ECC71' : '1px solid rgba(255,215,0,0.2)',
        boxShadow: isSelected
          ? '0 0 20px rgba(46,204,113,0.15) inset'
          : '0 0 12px rgba(26,111,219,0.08) inset',
        transition: 'all 0.25s ease',
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-sm font-semibold" style={{ color: '#FFD700' }}>
            {station.name}
          </h3>
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mt-1"
            style={{
              background: 'rgba(255,215,0,0.1)',
              color: '#FFD700',
              border: '1px solid rgba(255,215,0,0.3)',
            }}
          >
            {station.brand}
          </span>
        </div>
        <div className="text-right">
          <span
            className="text-lg font-bold"
            style={{ color: '#2ECC71' }}
          >
            {(station.price * 100).toFixed(1)}
          </span>
          <span className="text-xs text-gray-400 ml-0.5">¢/L</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-2">{station.address}</p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{station.distance} km away</span>
        <span>
          Updated {new Date(station.lastUpdated).toLocaleTimeString('en-AU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
