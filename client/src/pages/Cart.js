import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cartItems]);

  const removeItemFromCart = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - ₹{item.price}
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeItemFromCart(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <h5 className="text-end mb-4">Total: ₹{total}</h5>

          <div className="text-center">
            <button className="btn btn-secondary me-3" onClick={() => navigate('/products')}>
              🔙 Back to Products
            </button>
            <button className="btn btn-danger me-3" onClick={clearCart}>
              Clear Cart
            </button>
            <button
              className="btn btn-success"
              onClick={() => alert('Proceeding to Checkout...')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
