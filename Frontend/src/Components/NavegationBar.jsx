import React from 'react';

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <nav className="navbar">
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
