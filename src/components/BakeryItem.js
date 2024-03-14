import React from 'react';

function BakeryItem({ item }) {
  return (
    <div className="bakery-item">


      <div className="details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <img src={item.image} alt={item.name} />
      </div>
    </div>
  );
}

export default BakeryItem;
