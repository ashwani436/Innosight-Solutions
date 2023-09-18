import React from 'react';
import Card from './Card'; // Assuming you have a Card component
// import './YourComponent.css'; // Import your custom CSS for advanced styling
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel CSS
import { Carousel } from 'react-responsive-carousel';
import projectData from './projectData';
import styled from 'styled-components';


const ArrowStyling = styled.div`
.custom-arrow {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #f56565; 
  border:2px solid black
}

.custom-arrow-left {
  left: 10px; 
}

.custom-arrow-right {
  right: 10px; 
}

`;


const CustomArrow = ({ onClick, direction }) => (
  <ArrowStyling>
  <button
    onClick={onClick}
    className={`custom-arrow custom-arrow-${direction} d-flex`}
  >
    {direction === 'left' ? '<' : '>'}
    </button>
    </ArrowStyling>
);

const ResidentialProjects = () => {
  // Split the projectData into chunks of 3 items each
  const chunkSize = 3;
  const projectChunks = [];
  for (let i = 0; i < projectData.length; i += chunkSize) {
    projectChunks.push(projectData.slice(i, i + chunkSize));
  }

  return (
    <>
      <div className="residential-projects my-5 p-3" style={{backgroundColor:'#FAEBD7'}}>
        <h3 className="display-5 text-center font-weight-bold">
          RESIDENTIAL <span className='text-danger'>PROJECTS</span>
        </h3>
        <div className="container-fluid mb-5 mt-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <Carousel
                showStatus={false}
                showThumbs
                infiniteLoop
                stopOnHover={false}
                showIndicators={false}
                renderThumbs={() => { }}
                slidesToSlide={1}
                 renderArrowPrev={(onClickHandler, hasPrev) =>
                  hasPrev && (
                    <CustomArrow onClick={onClickHandler} direction="left" />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                  hasNext && (
                    <CustomArrow onClick={onClickHandler} direction="right" />
                  )
                }
              >
                {projectChunks.map((chunk, index) => (
                  <div key={index} className="row gy-4">
                    {chunk.map((val) => (
                     <Card key={val.id} imgsrc={val.image} title={val.bannerText} squareFeet={val.squarefeet} bedroom={val.bedrooms} />
                    ))}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentialProjects;
