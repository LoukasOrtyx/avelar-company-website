import React from 'react';
import '../styles/ItemCard.css'

const ItemCard = ({ image, price, name, link }) => {
	const handleClick = () => {
	  window.location.href = link;
	};
  
	return (
	  <div className="item-card" onClick={handleClick}>
		<div className="item-image">
		  <img src={image} alt={name} />
		</div>
		<div className="item-details">
		  <h3>{name}</h3>
		  <p className="price">R${price}</p>
		</div>
	  </div>
	);
  };
  
  export default ItemCard;
