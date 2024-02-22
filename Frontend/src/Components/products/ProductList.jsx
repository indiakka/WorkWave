import React from 'react';
import productsData from './data/products.json';

const ProductList = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productsData.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> 
            <img src={product.imgUrl} alt={product.name} />
            
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>

          </li>
        ))}
      </ul>
    </div>
    
    
  );
};

export default ProductList;
