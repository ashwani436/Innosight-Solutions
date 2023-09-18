import React from 'react';
import Card from './Card';
import projectData from './projectData';

function CardList() {
  return (
     <>
     <div className="my-5">
       <h1 className="text-center">Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
               projectData.map((val)=>{
                 return(
                   <Card key={val.id} imgsrc={val.image} title={val.bannerText} squareFeet={val.squarefeet} bedroom={val.bedrooms} />
                 )
               })
             }
              
           </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default CardList;
