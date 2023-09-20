import React from 'react';
import Card from './Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import projectData from './projectData';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ArrowStyling = styled.div`
.react-multiple-carousel__arrow--left {
  left:60px !important;
  position: fixed;
  z-index: 2;
}
.react-multiple-carousel__arrow--right {

  right:60px !important;
  position:fixed;
  z-index:2;
}

`;

const CommercialProjects = () => {
 
  const chunkSize = 3;
  const projectChunks = [];
  for (let i = 0; i < projectData.length; i += chunkSize) {
    projectChunks.push(projectData.slice(i, i + chunkSize));
  }

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
  };


  return (
    <>
      <div className="residential-projects my-5 p-3" style={{backgroundColor:'#FAEBD7'}}>
        <h3 className="display-5 text-center font-weight-bold">
          COMMERCIAL <span className='text-danger'>PROJECTS</span>
        </h3>
        <div className="container-fluid mb-5 mt-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <ArrowStyling>
            <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            slidesToSlide={1}
            swipeable
          >
                {projectChunks.map((chunk, index) => (
                  <div key={index} className="row gy-4">
                    {chunk.map((val) => (
                     <Card key={val.id} imgsrc={val.image} title={val.bannerText} squareFeet={val.squarefeet} bedroom={val.bedrooms} />
                    ))}
                  </div>
                ))}
              </Carousel>
              </ArrowStyling>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommercialProjects;