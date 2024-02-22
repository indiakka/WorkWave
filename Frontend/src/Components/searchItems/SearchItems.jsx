import React, { useState, useEffect, useContext } from 'react';
import itemsData from './products.json';
import { CartContext } from '../../context/CartContext';
import Card from '../Card/Card'

function SearchItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, updateCartItemCount } = useContext(CartContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearch = () => {
    const filteredItems = itemsData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      setItems(itemsData);
    }
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: (product.quantity || 0) + 1 });
    if (updateCartItemCount) {
      updateCartItemCount();
    }
    // alert(`${product.name} añadido al carrito!`);
  };

  return (
    <div className="wrapper">
      {/* <div className='search-group'>
        <label htmlFor="search">¿Qué artículo te gustaría encontrar?:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div> */}

<div class="searchbar">
    <div class="searchbar-wrapper">
       

        <div class="searchbar-center">
            <div class="searchbar-input-spacer"></div>

            <input type="text" class="searchbar-input" maxlength="2048" name="q" autocapitalize="off" autocomplete="off" title="Search" role="combobox"
          id="search" value={searchTerm} onChange={handleInputChange} placeholder="Introduce tu búsqueda" />
        </div>

        <div onClick={handleSearch} class="searchbar-left">
            <div class="search-icon-wrapper">
                <span class="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</div>


      <div className="product-section">
      {isLoaded && (
        <ul className="product-list">
          {items.map((item) => (
            <li className="product-item" key={item.id}>
             
             <h2  className="product-name">{item.name}</h2>
                  <img src={item.imgUrl} alt={item.name} className="product-image"/>
                
                
                 
                  <ol className="card-list">
                    <li>
                      Precio: <span className="product-price">{item.price}€</span>
                    </li>
                    {/* <li>
                      Categoria: <span>{item.category}</span>
                    </li> */}
                    {/* <li>
                      Descripcion: <span>{item.description}</span>
                    </li> */}
                  </ol>
                  <button className='add-to-cart-button' onClick={() => handleAddToCart(item)}>Añadir al carrito</button>
                  {/* <Card itemsData={product} /> */}
              
            </li>
          ))}
        </ul>
        
      )}
    </div>
 </div>
  );
}

export default SearchItems;
