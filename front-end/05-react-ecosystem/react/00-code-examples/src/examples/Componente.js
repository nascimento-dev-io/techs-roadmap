import React from "react";

const Componente = (props) => {
  return <div>{props.children}</div>;
};

// Reutilizando o Componentes

const Header = () => {
  return <header>Header</header>;
};

const NavBar = () => {
  return <nav>NavBar</nav>;
};

const Carrousel = () => {
  return <div>Carrousel</div>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};

export const Home = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Carrousel />
      <Componente />
      <Componente />
      <Footer />
    </>
  );
};

// Exemplo de componente com mais detalhes de

const Container = () => {
  return <Componente>Isso é um children.</Componente>;
};

export default Container;
