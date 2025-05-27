
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Produk A",
    price: "Rp150.000",
    image: "https://via.placeholder.com/300x200",
    description: "Deskripsi singkat produk A."
  },
  {
    id: 2,
    name: "Produk B",
    price: "Rp200.000",
    image: "https://via.placeholder.com/300x200",
    description: "Deskripsi singkat produk B."
  }
];

export default function TokoOnline() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Toko Online Modern</h1>
        <p style={{ color: '#666' }}>Temukan produk terbaik kami</p>
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            marginTop: 20,
            padding: 10,
            width: '100%',
            maxWidth: 400,
            fontSize: 16,
            borderRadius: 4,
            border: '1px solid #ccc'
          }}
        />
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>{product.name}</h2>
              <p style={{ color: '#888', marginBottom: 12 }}>{product.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: 'green', fontSize: 18 }}>{product.price}</span>
                <button style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}>Beli</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: 'center', marginTop: 60, color: '#aaa', fontSize: 14 }}>
        &copy; 2025 Toko Online Modern. Semua hak dilindungi.
      </footer>
    </div>
  );
}
