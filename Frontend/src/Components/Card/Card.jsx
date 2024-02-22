import React, { useContext, useState, useEffect } from 'react';
import FavoriteContext from '../../context/FavoriteContext';

const Card = ({ productData }) => {
    const { favoriteItems, updateFavoriteItems } = useContext(FavoriteContext);

    // Estado para manejar el ícono del corazón
    const [heartIcon, setHeartIcon] = useState("🖤");

    // Actualizar el ícono del corazón basado en si el producto está en favoritos
    useEffect(() => {
        const isFavorite = favoriteItems.includes(productData);
        setHeartIcon(isFavorite ? "❤️" : "🖤");
    }, [favoriteItems, productData]);

    const handleAddToFavorites = () => {
        // Verifica si el item ya está en favoritos
        const isFavorite = favoriteItems.includes(productData);

        // Si está en favoritos, lo elimina, si no, lo añade
        const newFavorites = isFavorite 
            ? favoriteItems.filter(item => item !== productData) 
            : [...favoriteItems, productData];

        updateFavoriteItems(newFavorites);
    };

    return (
        <div>
            <button className='Corazon' onClick={handleAddToFavorites}>{heartIcon}</button>
        </div>
    );
};

export default Card;
