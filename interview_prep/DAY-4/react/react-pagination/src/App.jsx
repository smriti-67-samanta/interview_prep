import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1>FakeStore Products</h1>
      {currentProducts.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <img src={product.image} width="100" alt={product.title} />
          <h3>{product.title}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description.substring(0, 100)}...</p>
        </div>
      ))}
      
      {/* Pagination Controls */}
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === i + 1 ? '#007bff' : '#f0f0f0',
              color: currentPage === i + 1 ? 'white' : 'black',
              border: '1px solid #ddd',
              cursor: 'pointer'
            }}
          >
            {i + 1}
          </button>
        ))}
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          Next
        </button>
      </div>
      
      <p style={{ textAlign: 'center' }}>
        Page {currentPage} of {totalPages} | Total Products: {products.length}
      </p>
    </div>
  );
}

export default App;