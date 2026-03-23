import React from 'react';
import '../styles/Header.css';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <h1>🛒 QuickCart</h1>

      <div className="cart-icon" onClick={onCartClick}>
        🛍️ <span className="badge">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
