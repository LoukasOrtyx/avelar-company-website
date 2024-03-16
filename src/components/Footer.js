import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap'; // Importando componentes do Reactstrap

class Footer extends React.Component {
  render() {
    const navbarStyle = {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '20px 0', // Ajustando o padding vertical para aumentar o tamanho do footer
      boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', // Adicionando uma sombra sutil na parte superior
      height: '100px', // Aumentando a altura do Navbar para aumentar o tamanho do footer
    };

    const brandStyle = {
      fontSize: '1.2rem', // Aumentando o tamanho da fonte do NavbarBrand
    };

    return (
      <div className="fixed-bottom">  
        <Navbar style={navbarStyle} color="dark" dark>
          <Container>
            <NavbarBrand style={brandStyle}>2024 Sua Loja de Amplificadores Meteoro. Todos os direitos reservados.</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
