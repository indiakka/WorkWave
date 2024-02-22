import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Card from './Card/Card';

const URI = 'http://localhost:8080/workwave/api/announcements';

const CompShowAnnouncements = () =>
{
  const [ announcements, setAnnouncements ] = useState( [] );
  const [ currentPage, setCurrentPage ] = useState( 1 );
  const announcementsPerPage = 3; // Número de anuncios por página
  const [ checkedList, setCheckedList ] = useState( {} );
  const { addToCart, updateCartItemCount } = useContext( CartContext );

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
    } catch ( error )
    {
      console.error( 'Error al obtener los anuncios:', error );
    }
  };

  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice( indexOfFirstAnnouncement, indexOfLastAnnouncement );
  const totalPages = Math.ceil( announcements.length / announcementsPerPage );

  const handlePageChange = ( newPage ) =>
  {
    setCurrentPage( newPage );
  };



  const handleAddToCart = ( announcement ) =>
  {
    addToCart( { ...announcement, quantity: ( announcement.quantity || 0 ) + 1 } );
    if ( updateCartItemCount )
    {
      updateCartItemCount();
    }
  };

  return (
    <section className="product-section">
      <div>
        <h1 className="section-title">Encuentra tu oferta de empleo</h1>
      </div>
      <div className='slider'>
        <div className="product-list">
          {currentAnnouncements.map( ( announcement ) => (
            <div key={announcement.id} className="product-item">
              <h2 className="product-name">Empresa:</h2>
              <p className="product-list">{announcement.companyName}</p>
              <h2 className="product-name">Puesto de trabajo:</h2>
              <p className="product-list">{announcement.jobName}</p>
              <h2 className="product-name">Provincia:</h2>
              <p className="product-list">{announcement.province}</p>
              <h2 className="product-name">Requisitos:</h2>
              <p className="product-list">{announcement.jobRequirements}</p>
              <p className="product-name">Descripción del trabajo:</p>
              <p className="product-list">{announcement.jobDescription}</p>
              <p className="product-name">Salario Anual:</p>
              <p className="product-list">{announcement.salary} $</p>
              <p className="product-name">Fecha de creacion:</p>
              <p className="product-list">{announcement.publicationDate}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart( announcement )}>
                Apuntarse
              </button>
              <Card productData={announcement} />
            </div>
          ) )}
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange( currentPage - 1 )}
            disabled={currentPage === 1}
            className="pagination-button"
          ><i className="fa-solid fa-arrow-left"></i></button>

          <span className="pagination-info">{currentPage} de {totalPages}</span>

          <button
            onClick={() => handlePageChange( currentPage + 1 )}
            disabled={currentPage === totalPages}
            className="pagination-button"
          ><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
};

export default CompShowAnnouncements;