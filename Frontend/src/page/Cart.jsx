import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () =>
{
  const { cartItems, clearCart } = useContext( CartContext );
  const navigate = useNavigate();

  const handleClearCart = () =>
  {
    clearCart();
  };


  return (
    <div className="cart-section">
      <h1 className="section-title-cart">Tus inscripciones</h1>
      {cartItems.length === 0 ? (
        <p>No te haz inscrito a ninguna oferta.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map( ( item ) => (
              <li key={item.id} className="cart-item">
                <div>
                  <p className="cart-item-name">{item.companyName}</p>
                  <p className="cart-item-price">{item.jobName}</p>
                  <p className="cart-item-total">Salario: {item.salary}$</p>
                </div>
                <div className="cart-item-actions"></div>
              </li>
            ) )}
          </ul>
          <div className="cart-summary">
          </div>
          <div className="cart-actions">
            <button className="Vaciar" onClick={handleClearCart}>Eliminar todas las ofertas</button>
          </div>
        </>
      )}
      <div className="cart-actions">
        <button className="Inicio" onClick={() => navigate( '/' )}>Volver a Inicio</button>
      </div>
    </div>
  );
};

export default Cart;