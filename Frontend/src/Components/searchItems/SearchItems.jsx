import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';


function SearchItems ()
{
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ items, setItems ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const { addToCart, updateCartItemCount } = useContext( CartContext );
  const URI = 'http://localhost:8080/workwave/api/announcements';
  const [ checkedList, setCheckedList ] = useState( {} );
  const [ announcements, setAnnouncements ] = useState( [] );
  const [ filteredAnnouncements, setFilteredAnnouncements ] = useState( [] );

  useEffect( () =>
  {
    getAnnouncements();
  }, [] );

  const getAnnouncements = async () =>
  {
    try
    {
      const res = await axios.get( URI );
      setAnnouncements( res.data );
      const initialCheckedList = {};
      res.data.forEach( announcement =>
      {
        initialCheckedList[ announcement.id ] = false;
      } );
      setCheckedList( initialCheckedList );
      // setFilteredAnnouncements(res.data); // Comenta o elimina esta línea
      setIsLoaded( true );
    } catch ( error )
    {
      console.error( 'Error al obtener los anuncios:', error );
      setIsLoaded( true );
    }
  };



  const handleSearch = () =>
  {
    console.log( "Buscando:", searchTerm ); // Verifica el término de búsqueda
    console.log( "Anuncios antes del filtro:", announcements ); // Verifica los datos antes del filtro

    const filteredItems = announcements.filter( announcement =>
      announcement.jobName.toLowerCase().includes( searchTerm.toLowerCase() )
    );

    console.log( "Anuncios después del filtro:", filteredItems ); // Verifica los datos después del filtro
    setFilteredAnnouncements( filteredItems );
  };


  const handleInputChange = ( event ) =>
  {
    setSearchTerm( event.target.value );

    if ( event.target.value === '' )
    {
      setItems( announcements );
    }
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
    <div className="wrapper">

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
        {isLoaded ? (
          filteredAnnouncements.length > 0 ? (
            <div className="product-list">
              {filteredAnnouncements.map( ( announcement ) => (
                <div className="product-item" key={announcement.id}>
                  <h2 className="product-name">{announcement.jobName}</h2>
                  <h3>{announcement.province}</h3>
                  <div className="card-list">
                    <div>Salario: <span className="product-price">{announcement.salary}$</span></div>
                  </div>
                  <button className='add-to-cart-button' onClick={() => handleAddToCart( announcement )}>Añadir al carrito</button>
                </div>
              ) )}
            </div>
          ) : (
            <p>No se encontraron anuncios.</p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </div>

    </div>
  );
}

export default SearchItems;