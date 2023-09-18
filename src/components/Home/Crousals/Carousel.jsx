import '../Crousals/Carousel.css';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';

function Carousl() {
  return (
    <Carousel
      autoPlay
      interval={5000}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      stopOnHover={false}
      showIndicators={false}
    >
      {[
        img1,
        img2,
        img3,
        img4,
        img5,
      ].map((img, index) => (
        <div key={index} className="carousel-item1">
          <img src={img} alt={`Image ${index + 1}`} />
          <div className="carousel-text">
            <span>Innovative</span>
            <span>Asset</span>
            <span>Solutions!</span>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carousl;


