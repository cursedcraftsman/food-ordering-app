import React from 'react';
import './Cart.css';

export const Cart = ({ cartItems, removeFromCart, closeCart }) => {
  return (
    <div className={`cart-container ${cartItems.length > 0 ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={closeCart}>×</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <div className="cart-item-info">
                <h4>{item.strDrink}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.idDrink)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <button onClick={closeCart}>Close Cart</button>
      </div>
    </div>
  );
};
