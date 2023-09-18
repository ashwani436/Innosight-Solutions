import React from 'react'
import ServiceCard from './ServiceCard';
import img from '../assets/img1.jpg';
import projectData from '../Projects/projectData';

function Services(props) {
  return (
      <div style={{ marginTop: '150px' }}>
          <h1 className='d-flex align-items-center justify-content-center text-white'>Our Services</h1>
   <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
               projectData.map((val)=>{
                 return(
                   <ServiceCard key={val.id} imgsrc={val.image} title={val.bannerText} squareFeet={val.squarefeet} bedroom={val.bedrooms} />
                 )
               })
             }
              
           </div>
        </div>
      </div>
    </div>
  </>
      </div>
  )
}

export default Services;