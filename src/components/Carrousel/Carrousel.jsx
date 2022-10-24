import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";

const Carrousel = () => {
  return (
    <div className="container-sm">
      <Carousel fade indicators={false} className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-pic"
            src={require("./pics/carrousel-1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Te escuchamos</h3>
            <p>Y armamos una rutina a tu medida</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-pic"
            src={require("./pics/carrousel-2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Te entendemos</h3>
            <p>Y nos acoplamos a tu estilo de vida</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-pic"
            src={require("./pics/carrousel-3.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Te guiamos</h3>
            <p>Hacia una vida más saludable</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
