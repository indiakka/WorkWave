import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Home from '../page/Home';
import Cart from '../page/Cart';
import Products from '../page/Products';
import Search from '../page/Search';
import FavoriteList from '../Components/Wish/Wish';
import AboutUs from '../page/Aboutus'


import '../Components/footer/Footer.css';
import '../Components/header/Header.css';
import '../page/Pagination.css';
import '../page/ProductModal.css';
import '../Components/principal/Principal.css';
import '../page/Cart.css';
import '../Components/principal/Slider.css'
import '../page/Aboutus.css'
import '../Components/searchItems/SearchItems.css'


function RoutesProject() {
  return (
    <Router>
      
        <Header />
        <Routes>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Aboutus' element={<AboutUs />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Wishlist' element={<FavoriteList />} />
        </Routes>
        <Footer />
    
    </Router>
  );
}

export default RoutesProject;
