import React, { useState } from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <aside className="category">
      
      <h2>Categorías</h2>
      <ul>
        {categories.map((category, index) => (
          <li className="add-to-cart-button" key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}  
         <p className="add-to-cart-button" onClick={() => handleCategoryClick(null)}>Mostrar todos</p>
      </ul>
      
    </aside>
  );
};

export default CategoryFilter;
