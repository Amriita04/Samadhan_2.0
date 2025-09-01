import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then(res => res.json())
      .then(data => {
        const item = data.find(p => p._id === id);
        setProduct(item);
      });
  }, [id]);

  const handleAdd = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width={200} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
