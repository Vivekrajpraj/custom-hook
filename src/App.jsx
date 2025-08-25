import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div className="app">
      <h1>🛒 Product List (Fetched with useFetch Hook)</h1>

      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">❌ Error: {error}</p>}

      <div className="product-list">
        {data &&
          data.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.images[0]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
