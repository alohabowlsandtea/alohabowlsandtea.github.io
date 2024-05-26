import React from "react";
import Container from 'react-bootstrap/Container';
import "../css/MenuComponent.css";
import Image from 'react-bootstrap/Image';
import menu1 from '../img/Menu_1.jpg';

const MenuComponent = () => {
    return (
        <Container id="menu">
            <h2 className="title">MENU</h2>
            <br />
            <h3>Acai &middot; Poke &middot; Boba</h3>
            <br />
            <div id="menu-section">
            <Image className="menu-img" src={menu1} alt="menu1" />
            </div>
        </Container>
    )
}

export default MenuComponent;