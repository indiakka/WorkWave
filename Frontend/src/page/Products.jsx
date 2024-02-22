import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CompShowAnnouncements from '../Components/CompShowOferts';

const Pagination = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { addToCart, updateCartItemCount } = useContext(CartContext);

  const productsPerPage = 4;
 

  return (
    <section className="product-section">
      <CompShowAnnouncements />
    </section>
  );
};

export default Pagination;
