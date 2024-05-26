import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import history from '../img/history.jpeg';
import "../css/AboutComponent.css";

const AboutComponent = () => {
    return (
        <Container id="about">
            <h2 className="title">ABOUT</h2>
            <Row>
                <Col sm={6}>
                    <h3>History</h3>
                    <br/>
                    <p id="history-summary">
                    Aloha Bowls and Tea celebrates Hawaii's cultural diversity by serving fresh, high-quality food and beverages with Aloha. As a local small business, we value Ohana and source ingredients locally, offering made-to-order poke bowls with sashimi-grade Ahi and smoothies from fresh fruits, ensuring the freshest local favorites.
                    </p>
                    <br/>
                    <p>
                        We look forward to meeting you!
                    </p>
                </Col>
                <Col id="about-img-container" sm={6}>
                    <Image id="about-img" src={history} alt="food" />
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default AboutComponent;