import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1>FakeStore Products</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <img src={product.image} width="100" alt={product.title} />
          <h3>{product.title}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description.substring(0, 100)}...</p>
         
        </div>
      ))}
    </div>
  );
}

export default App;