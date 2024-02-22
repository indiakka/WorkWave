import { CartContext } from '../context/CartContext';
import React, { useState, useContext } from 'react';

const ProductModal = ({ product, closeModal }) => {

  
  const { addToCart, updateCartItemCount } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: (product.quantity || 0) + 1 });
    if (updateCartItemCount) {
      updateCartItemCount();
    }
    alert(`¡${product.name} añadido al carrito!`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
      <img src={product.imgUrl} alt={product.name} />
      <div className='info'>
        <div>
            <h2>{product.name}</h2>
        <p>{product.description}</p> 
        </div>   
           <div className='price'>
         <p>Precio: <strong>{product.price}€</strong></p>
             <button className="add-to-cart-button1" onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
         </div>
      </div>
      </div>
    </section>
  );
};

export default ProductModal;