import React, { useState } from 'react';
import mockData from './mockData.json';

function App() {
  const [skuInput, setSkuInput] = useState('');
  const [product, setProduct] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const foundProduct = mockData.find((item) => item.sku === skuInput); 

    if (foundProduct) {
      setProduct(foundProduct);
      setError('');
    } else {
      setProduct(null);
      setError('Something went wrong'); // 🔴 Vague error
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>SKU Lookup</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter SKU"
          value={skuInput}
          onChange={(e) => setSkuInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <p>Name: {product?.name}</p>         
        <p>SKU: {product?.sku}</p>
        <p>In Stock: {product ? (product.inStock ? 'No' : 'Yes') : ''}</p> 
        <p>On Sale: {product ? (product.isOnSale ? 'No' : 'Yes') : ''}</p>
        <p>New Arrival: {product ? (product.isNewArrival ? 'No' : 'Yes') : ''}</p>
        <p>Featured: {product ? (product.isFeatured ? 'No' : 'Yes') : ''}</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
