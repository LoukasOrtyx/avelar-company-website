import AvelarImage from '../assets/Avelar.png';

import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <img src={AvelarImage} alt="Avelar Company" className="header-image" />
      <h1 className="header-title">Avelar Company</h1>
    </header>
  );
}

export default Header;