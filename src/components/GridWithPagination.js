import React, { useState } from 'react';
import ItemCard from './ItemCard'; // Importe o componente ItemCard
import '../styles/GridWithPagination.css'; // Importe os estilos CSS para a grid

const itemsPerPage = 9; // Número de itens por página

const GridWithPagination = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => handleClick(i)} disabled={currentPage === i}>
          {i}
        </button>
      );
    }
    return pages;
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = items.slice(startIndex, endIndex);

    return itemsToShow.map(item => (
      <ItemCard
        name={item.title}
        price={(item.price * 0.95).toFixed(2)}
        image={item.thumbnail_url}
        link={`https://avelarcompany.mercadoshops.com.br${new URL(item.permalink).pathname}`}
      />
    ));
  };

  return (
    <div>
      <div className="grid-container">{renderItems()}</div>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default GridWithPagination;