import React from 'react'
import '../Services/Servicecard.css';
import styled from 'styled-components';


function ServiceCard(props) {
    return (
     <div className="col-md-4 col-10 mx-auto">
      <div className="property-card m-2">
        <div className="property-img">
            <img src={props.imgsrc} alt="Property" />    
              </div>
        <div className='p-5 px-5'>
        <button className='w-100' style={{height:'45px',backgroundColor:'gray',color:'white',border:'none',outline:'none'}}>SEE MORE</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard