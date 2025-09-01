import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid gray', padding: '10px' }}>
            <h3>{product.title}</h3>
            <img src={product.image} width={100} alt={product.title} />
            <p>${product.price}</p>
            <Link to={`/product/${product._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
