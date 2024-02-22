import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext';

const FavoriteList = () => {
    const { favoriteItems, updateFavoriteItems } = useContext(FavoriteContext);
    const { addToCart, updateCartItemCount } = useContext(CartContext);

    const removeFavorite = (itemToRemove) => {
        // Filtrar el ítem que se desea eliminar
        const newFavorites = favoriteItems.filter(item => item.id !== itemToRemove.id);
        // Actualizar la lista de favoritos con la nueva lista
        updateFavoriteItems(newFavorites);
    };

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: (product.quantity || 0) + 1 });
        if (updateCartItemCount) {
          updateCartItemCount();
        }
        // alert(`${product.name} añadido al carrito!`);
      };

    return (
        <div className="product-section">
            <h3>Mis Favoritos</h3>
            <ul className="product-list">
                {favoriteItems.map((item) => (
                    <li key={item.id} className="product-item">
                        <div>
                            <img src={item.imgUrl} alt={item.name} className="product-image" />
                            <p className="product-name">{item.name}</p>
                            <p className="cart-item-price">Precio: {item.price}€</p>
                            <div className='botonesWish'>
                            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
                            <button className="add-to-cart-button" onClick={() => {removeFavorite(item)}}>Quitar de favoritos</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
