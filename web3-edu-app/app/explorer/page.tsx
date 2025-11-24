'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function ExplorePage() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid web3-dark-bg min-vh-100 py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="neon-text">🌐 Crypto Market Data</h1>
          <Link href="/" className="btn pixel-button">
            ← Back to Home
          </Link>
        </div>

        {loading ? (
          <div className="text-center neon-text">
            <p>Loading market data...</p>
          </div>
        ) : (
          <div className="row">
            {cryptoData.map((crypto) => (
              <div key={crypto.id} className="col-md-6 col-lg-4 mb-3">
                <div className="pixel-card p-3">
                  <h5 className="neon-text">{crypto.name} ({crypto.symbol.toUpperCase()})</h5>
                  <p className="mb-1">Price: ${crypto.current_price.toLocaleString()}</p>
                  <p className={crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>
                    24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <button onClick={fetchCryptoData} className="btn pixel-button me-2">
            🔄 Refresh Data
          </button>
          <Link href="/courses" className="btn pixel-button">
            📚 View Courses
          </Link>
        </div>
      </div>
    </div>
  );
}