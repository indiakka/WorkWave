import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext';

const FavoriteList = () =>
{
    const { favoriteItems, updateFavoriteItems } = useContext( FavoriteContext );
    const { addToCart, updateCartItemCount } = useContext( CartContext );

    const removeFavorite = ( itemToRemove ) =>
    {
        // Filtrar el ítem que se desea eliminar
        const newFavorites = favoriteItems.filter( item => item.id !== itemToRemove.id );
        // Actualizar la lista de favoritos con la nueva lista
        updateFavoriteItems( newFavorites );
    };

    const handleAddToCart = ( product ) =>
    {
        addToCart( { ...product, quantity: ( product.quantity || 0 ) + 1 } );
        if ( updateCartItemCount )
        {
            updateCartItemCount();
        }
    };

    return (
        <div className="product-section">
            <h3>Mis Favoritos</h3>
            <div className="product-list">
                {favoriteItems.map( ( item ) => (
                    <div key={item.id} className="product-item">
                        <h2 className="product-name">{item.jobName}</h2>
                        <h3 className="product-name">Provincia:</h3>
                        <h3 className="product-name">{item.province}</h3>
                        <p className="product-list">Requerimientos:{item.jobRequirements}</p>
                        <p className="product-list">Descripcion:{item.jobDescription}</p>
                        <p className="cart-item-price">Salario: {item.salary}$</p>
                        <p className="product-list" >Fecha de Publicacion:{item.publicationDate}</p>
                        <div className='botonesWish'>
                            <button className="add-to-cart-button" onClick={() => handleAddToCart( item )}>Agregar al carrito</button>
                            <button className="add-to-cart-button" onClick={() => { removeFavorite( item ) }}>Quitar de favoritos</button>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    );
};

export default FavoriteList;