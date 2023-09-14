import React from "react";
import "./Banner.css"; // Import your CSS file for styling

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Welcome to Innosight Solution</h1>
        <p>Your trusted partner in business</p>
        <button className="btn btn-primary"><a href="/about" style={{color:"white",textDecoration:'none'}}>Learn More</a></button>
      </div>
    </div>
  );
}

export default Banner;
