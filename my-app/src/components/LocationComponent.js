import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/LocationComponent.css";

const LocationComponent = () => {
    return (
        <div id="location">
            {/* <h2 className="title">LOCATION</h2> */}
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col sm={6} id="location-information-container">
                    <div id="location-section">
                        <br />
                        <br />
                        <h2 className="title">LOCATION</h2>
                        <br />
                        <br />
                        <h3>Address</h3>
                        <a style={{color: 'black', textDecoration: 'none'}} href="https://www.google.com/maps?sca_esv=35b2ac92d41e214b&sca_upv=1&output=search&q=Hilton+Hawaiian+Village&source=lnms&entry=mc&ved=1t:200715&ictx=111" target="_blank" rel="noopener noreferrer"><p id="location-box">Hilton Hawaiian Village</p></a>
                        <p>2005 Kālia Rd, Honolulu, HI 96815</p>
                        <br />
                        <h3>Hours</h3>
                        <p>Monday - Sunday: 8:00 am - 6:00 pm</p>
                        <br />
                        <br />
                        <br />
                    </div>
                </Col>
                <Col id="location-image-container" >
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LocationComponent;