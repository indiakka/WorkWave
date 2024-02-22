import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getCartTotal, clearCart, updateItemQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra!');
    clearCart();
    // Redirige a la página de inicio después de la alerta
    navigate('/');
  };

  const handleUpdateQuantity = (itemId, amount) => {
    updateItemQuantity(itemId, amount);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="cart-section">
      <h1 className="section-title-cart">Resumen de Compra</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                  <p className="cart-item-price">Precio unitario: {item.price}€</p>
                  <p className="cart-item-total">Total: {item.price * item.quantity}€</p>
                </div>
                <div className="cart-item-actions">
                  <button className="boton-small-pos" onClick={() => handleUpdateQuantity(item.id, 1)}>
                    +
                  </button>
                  <button className="boton-small-neg" onClick={() => handleRemoveItem(item.id)}>
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total del Carrito: {getCartTotal()}€</p>
            </div>
          <div className="cart-actions">
            <button className="Vaciar" onClick={handleClearCart}>Vaciar Carrito</button>
            <button className="Pay" onClick={handleCheckout}>
              Pagar
            </button>
          </div>
        </>
      )}
      <div className="cart-actions">
        <button className="Inicio" onClick={() => navigate('/')}>Volver a Inicio</button>
      </div>
    </div>
  );
};

export default Cart;
