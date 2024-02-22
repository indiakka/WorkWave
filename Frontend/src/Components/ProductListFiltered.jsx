// Importa React y cualquier otro módulo necesario
import React, { useState } from 'react';
import ProductList from './ProductList';
import NavigationBar from './NavegationBar';

// Componente funcional principal
const ProductListFiltered = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Obtener categorías únicas de los productos
  const categories = Array.from(new Set(products.map(product => product.category)));
  categories.unshift('Todos'); // Agregar la opción "Todos" al principio de la lista

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <NavigationBar categories={categories} onCategoryChange={handleCategoryChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductListFiltered;
