import React from 'react';
import '../Projects/Card.css'

function AllServicesCard(props) {

  const handleClickProperty = () => {
    
  }

  return (
    <div className="col-md-4 col-10 mx-auto wow animate__bounceInUp" data-wow-duration="2s">
      <div className="property-card m-2">
        <div className="property-img">
                  <img src={props.imgsrc} alt="Property" />
                  
        </div>
        <div className="property-details">
                  <h5 className="property-title">{props.title}</h5>
                  <p className="property-info"> Location : Lorem ipsum dolor sit amet, consectetur</p>
                  
         <div className=' d-flex justify-content-between'>
          <p className="property-info">{props.bedroom} Bedrooms</p>
         <p className="property-info">{props.squareFeet} Square Feet</p>
                  </div>
                  
        <div className=' d-flex justify-content-between'>
          <p className="property-info">{props.bedroom} Bedrooms</p>
         <p className="property-info">{props.squareFeet} Square Feet</p>
        </div>
                  
        </div>

         <div className="card-overlay">
          <button className="card-overlay-text btn btn-primary shadow-none" onClick={handleClickProperty}>View Property</button>
        </div>
      </div>
    </div>
  );
}

export default AllServicesCard;