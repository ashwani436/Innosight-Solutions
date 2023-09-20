import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components'
import "react-multi-carousel/lib/styles.css";
import leftarrow from '../assets/mdi-light_chevron-left.svg';
import rightarrow from '../assets/mdi-light_chevron-right.svg';

class Testimonials extends Component {

  state = {
    activeSilde: 0
  };

  handleSlideSelect = () => {};

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    };
    
    const CustomRight = ({ onClick }) => (
      <button className="arrow right" onClick={onClick} >
            <img src={rightarrow} alt="no-arrow" style={{backgroundColor:'white'}} />
      </button>
    );
    const CustomLeft = ({ onClick }) => (
      <button className="arrow left" onClick={onClick} >
        <img src={leftarrow} alt="no-arrow" style={{backgroundColor:'white'}}/>
      </button>
    );

    return (
      // <!-- Main Carousel Section Start -->
      <TestimonialWrapper>
      <div id="main-slide" className="carousel slide mt-5 mb-5 " data-ride="carousel">
        <div className="carousel-inner">
            <Carousel
            autoPlay
            responsive={responsive}
            additionalTransfrom={0}
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            // customRightArrow={<CustomRight />}
            // customLeftArrow={<CustomLeft />}
            >
            <div className="container mt-5">
              <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
             <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>
                   
                  
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
            <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>

                        
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
             <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
              </div>
            </div>
              </div>
              
               <div className="container mt-5">
              <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
            <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>
                   
                  
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
                <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>

                        
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
               <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
              </div>
            </div>
              </div>
              
               <div className="container mt-5">
              <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
              
               <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>
                   
                  
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
                <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
                  </div>

                        
              <div className="col-lg-4 col-md-12 col-sm-12">
              
                
                 <div className="right-text col-8 border border-warning p-5">
              <p className="fs-6">Docusieve has helped us achieve: more elegant
                                   as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya</p>
                </div>
              </div>
              </div>
            </div>
            </div>   
          </Carousel>
        </div>
      </div>
      </TestimonialWrapper>
    );
  }
}

export default Testimonials;


const TestimonialWrapper=styled.div`

.arrow {
    position:absolute;
    top: 30%;
  }
  
  .right {
    right:200px;
  }
  .text{
  font-family:Circular Std;
font-style: normal;
font-weight: 500;
font-size: 24px;
  }
  .left {
    left:80px;
  }
  .left-image{
      float:right;
      // margin-top:40px;
      // height:100%;
      
  }
.right-text{
font-family:Circular Std;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 125%;
  }

.heighligted-text{
  color:#0066FF;
}
  .author-container{
    display:flex;
    flex-direction:column;
    line-height:10px;
  }
  .author{
    font-family:Circular Std;
    font-size:20px;
    font-weight:bold;
  }
  .partner{
    font-family:Circular Std;
    font-size:15px;
    font-weight:normal;
  }
  @media screen and (max-width: 1280px){
    
.arrow {
  position:absolute;
  top: 38%;
}

.right {
  right:100px;
}

.left {
  left:100px;
}
    .left-image{
      float:none;
      margin-top:13%;
      margin-left:auto;
      margin-right:auto;
      // height:100%;
    }
    .right-text{
      font-family:Circular Std;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
        }
  }
  @media screen and (max-width: 768px){
    .arrow {
      position:absolute;
      top:50%;
    }
    .right {
      right:20px;
    }
    
    .left {
      left:0px;
    }
  .left-image{
    float:none;
   display:flex;
   align-items:center;
   justify-content:center;
    // height:100%;
  }
  .right-text{
    
    font-family:Circular Std;
    font-style: normal;
    font-weight: 500;
    // font-size: 15px;
    line-height: 125%;
    }
    .right-text{
font-family:Circular Std;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 125%;
      margin-top:30px;
      margin-left:auto;
      margin-right:auto;
    }

  }
  @media screen and (max-width: 600px){
    .arrow {
      position:absolute;
      top:30%;
    }
    .right {
      right:-20px;
    }
    
    .left {
      left:-20px;
    }
    .left-image{
      float:none;
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      // height:100%;
    }
    .right-text{
  font-family:Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 125%;
      margin-top:30px;
      margin-left:auto;
      margin-right:auto;
    }

  }
`
