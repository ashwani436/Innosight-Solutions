import React,{useEffect} from 'react'
import img from '../assets/img1.jpg';
import WOW from 'wowjs';

function About() {

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  
  return (
    <div className='about-us' style={{background:'#343434',color:'#b6a27b'}}>
      <div className="container p-5">
        <div style={{width:'-webkit-fill-available'}}>
         <h1 className=" mb-4 text-black mt-3 font-weight-bold text-center">About Us</h1>
         </div>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12 wow animate__fadeInLeft" data-wow-duration="2s">
            <img
              src={img}
              alt="About Us"
              className="h-100 w-100 rounded shadow float-right mb-3"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-center text-md-left wow animate__fadeInRight" data-wow-duration="2s">
           
            <p className="lead text-justify mt-3">
              We are passionate about innovation, creativity, and excellence.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis ante et odio imperdiet mattis.
            </p>
            <p className="lead text-justify">
              Our team is dedicated to pushing the boundaries of what's possible.
              We believe in the power of imagination and the impact of
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;