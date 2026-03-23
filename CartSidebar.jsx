import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, cart, onClose, onUpdateQuantity, onRemoveItem, totalPrice }) {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>

                <div className="qty">
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>

                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;
