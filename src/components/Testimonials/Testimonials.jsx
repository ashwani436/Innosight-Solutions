import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components'
import "react-multi-carousel/lib/styles.css";
import leftarrow from '../assets/mdi-light_chevron-left.svg';
import rightarrow from '../assets/mdi-light_chevron-right.svg';
import img from '../assets/img4.jpg'

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
            responsive={responsive}
            additionalTransfrom={0}
            autoPlaySpeed={3000}
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
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="col-9 left-image">
                  
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="First slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              
                
             <div className="right-text col-8">
              <p className="text">Docusieve has helped us achieve: more elegant & crisp work products much better rigorously
                                  formatted documentation &, as a result, greater value additions in the <span className="heighligted-text"> quality of our work</span> for the benefit of our clients.</p>
              
              <div className="author-container mt-5">
                <p className="author">Siddharth Raja</p>
                <p className="partner">Partner at Saakshya Law</p>
                </div>
              </div>
              </div>
              </div>

            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Second slide"
              />
              </div>
      
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8">
              <p className="text ">Mike Docusieve has  <span className="heighligted-text"> reduced my proofreading time</span> from 4-5 hours to an hour or lesser and identifies errors or 
                                    inconsistency using  AI. It is done in an organised manner & is easy single click navigation. </p>
               <div className="author-container mt-5">
                <p className="author">Varun Bhargava</p>
                <p className="partner">Antares legal </p>
                </div>
              </div>
              </div>
              </div>
              </div>
              <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Third slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8 mb-5">
              <p className="text">With Mike DocuSieve, the  <span className="heighligted-text">time saved</span> in proofreading each contract and agreement has opened up possibilities for newer mandates, clients and more billable hours. </p>
               <div className="author-container mt-5">
                <p className="author">Shyam Pandya</p>
                <p className="partner">Stratage Law Partner</p>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Third slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8 mb-5">
              <p className="text">For someone like myself at partner level, I don’t have to depend on my juniors anymore to review. The tool allows me to run one layer of proofreading, which  <span className="heighligted-text"> captures up to 90% of errors & inconsistencies accurately.</span></p>
               <div className="author-container mt-5">
                <p className="author">Akhil Bansal</p>
                <p className="partner">Transaction Advisory, AARC Partners</p>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Third slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8 mb-5">
              <p className="text">In an overcrowded market of LegalTech products there was <span className="heighligted-text"> nothing like Mike DocuSieve, especially an Indian counterpart to it.</span> We found no product that does what this can do.</p>
               <div className="author-container mt-5">
                <p className="author">Sonia Gupta</p>
                <p className="partner">Legal Advisory, AARC Partners</p>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Third slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8 mb-5">
              <p className="text">We have started our foray into LegalTech with Mikelegal & are extremely happy not just with their product but also the  <span className="heighligted-text"> guidance at each step.</span> Mike DocReview has helped us <span className="heighligted-text"> save time & reduced error margin</span> to negligible levels.</p>
               <div className="author-container mt-5">
                <p className="author">Radhika Bali</p>
                <p className="partner">Managing Partner, JCSS</p>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="col-9  left-image">
              <img
                className="w-100 h-100 float-end mt-4"
                src={img}
                alt="Third slide"
              />
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="right-text col-8 mb-5">
              <p className="text">Mike DocuSieve is a  <span className="heighligted-text"> boon</span> for law forms as it<span className="heighligted-text"> saves our time </span> & helps us proofread the document in the quickest manner.</p>
               <div className="author-container mt-5">
                <p className="author">Yash Singh</p>
                <p className="partner">Sarvaank Associates</p>
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
    left:250px;
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
