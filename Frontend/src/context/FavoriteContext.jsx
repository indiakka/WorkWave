import React, { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext({
    favoriteItems: [],
    updateFavoriteItems: () => {}
});

export const FavoriteProvider = ({ children }) => {
    // Inicializa el estado con los favoritos almacenados en localStorage, si existen
    const [favoriteItems, setFavoriteItems] = useState(() => {
        const savedFavorites = localStorage.getItem('favoriteItems');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Actualiza localStorage cuando cambia favoriteItems
    useEffect(() => {
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    const updateFavoriteItems = (newItems) => {
        setFavoriteItems(newItems);
    };

    return (
        <FavoriteContext.Provider value={{ favoriteItems, updateFavoriteItems }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;
