import '../Crousals/Carousel.css';
import React,{useState,useEffect} from 'react';
import img1 from '../../assets/INNOSIGHTS.png';
import img2 from '../../assets/ASSET.png';
import img3 from '../../assets/SOLUTIONS.png';

function Carousl() {

  const images = [img1,img2,img3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < images.length - 1) {
        // If there are more images in the array, increment the index
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        // If we've reached the end of the array, loop back to the beginning
        setCurrentImageIndex(0);
      }
    }, 1000); // Change image every 1 second (1000 milliseconds)

    // Stop the interval after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
    }, 5000); // Stop after 5 seconds

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, images]);

  return (
        <div className="carousel-item1">
          <img className="crousal-image" src={images[currentImageIndex]} alt="Image" />
        </div>
  );
}

export default Carousl;


