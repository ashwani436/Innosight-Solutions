import React from 'react'
import Services from './Services'
import projectData from '../Projects/projectData';
import AllServicesCard from './AllServicesCard';

function ResidentialServices() {
  return (
    <div style={{ marginTop: '150px' }}>
    <h1 className='d-flex align-items-center justify-content-center text-white'>Residential Services</h1>
<>
<div className="container-fluid mb-5">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className="row gy-4">
       {
         projectData.map((val)=>{
           return(
             <AllServicesCard key={val.id} imgsrc={val.image} title={val.bannerText} path={val.path} />
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

export default ResidentialServices;