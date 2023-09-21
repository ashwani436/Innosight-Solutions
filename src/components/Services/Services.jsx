import React from 'react'
import ServiceCard from './ServiceCard';
import img from '../assets/img1.jpg';
import projectData from '../Projects/projectData';
import serviceData from './ServiceData';

function Services(props) {
  return (
      <div style={{ marginTop: '20px' }}>
          <h1 className='d-flex align-items-center justify-content-center text-weight-bold'>Our Services</h1>
   <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
               serviceData.map((val)=>{
                 return(
                   <ServiceCard key={val.id} imgsrc={val.image} title={val.bannerText} path={val.path}/>
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