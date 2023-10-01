import React from 'react'
import img from '../assets/img2.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HomeProjects() {
    return (
        <div style={{background:'#b6a27b',marginBottom:'100px'}}>
            <h1 className='w-50 mx-auto text-center p-5 mb-3'>We construct homes with finishes and
                                                        features that fit your lifestyle.</h1>
        <div className='container flex-row mb-5'>    
           
     <div className="col-md-4 col-10 mx-auto" style={{marginBottom:'100px'}}>
      <div className="property-card m-2 bg-white wow animate__fadeInLeft" data-wow-duration="2s">
        <div className="property-img">
            <img src={img} className='w-100' alt="Property" />    
              </div>
                        <div className='p-5 px-5 '>
                            <h2 className='text-center font-weight-bold'>Residential Projects</h2>
        <Link to="/projects/residential-projects">
        <button className='w-100' style={{height:'45px',backgroundColor:'gray',color:'white',border:'none',outline:'none'}}>SEE MORE</button>
        </Link>
                        </div>
      </div>
      </div>
      
       <div className="col-md-4 col-10 mx-auto" style={{marginBottom:'100px'}}>
      <div className="property-card m-2 bg-white wow animate__fadeInLeft" data-wow-duration="2s">
        <div className="property-img">
            <img src={img} alt="Property" />    
              </div>
                        <div className='p-5 px-5'>
                            <h2 className='text-center font-weight-bold'>Commercial Projects</h2>
        <Link to="/projects/commercial-projects">
        <button className='w-100' style={{height:'45px',backgroundColor:'gray',color:'white',border:'none',outline:'none'}}>SEE MORE</button>
        </Link>
                        </div>
      </div>
                </div>
                
                
       <div className="col-md-4 col-10 mx-auto" style={{marginBottom:'100px'}}>
      <div className="property m-2 wow animate__fadeInRight" data-wow-duration="2s">
        <FormContainer>
        <Form action="#" method="POST">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
          <br />

          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" required />
          <br />

          <Label htmlFor="address">Address</Label>
          <TextArea id="address" name="address" rows="4" required></TextArea>
          <br />

          <SubmitButton type="submit" value="Submit" />
        </Form>
      </FormContainer>
      </div>
            </div>
            
    </div>
    </div>
  )
}

export default HomeProjects;


const FormContainer = styled.div`
  background-color: #889ab3;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  text-align: center;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 2px solid #555;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff5722; /* Highlight border color on focus */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 2px solid #555;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff5722; /* Highlight border color on focus */
  }
`;

const SubmitButton = styled.input`
  background-color: #ff5722;
  color: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19; /* Darker color on hover */
  }
`;

// export {
//   FormContainer,
//   Form,
//   Label,
//   Input,
//   TextArea,
//   SubmitButton
// };



