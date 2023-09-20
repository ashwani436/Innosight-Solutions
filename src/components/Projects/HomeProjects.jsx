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
      <div className="property-card m-2 bg-white">
        <div className="property-img">
            <img src={img} className='w-100' alt="Property" />    
              </div>
                        <div className='p-5 px-5'>
                            <h2 className='text-center font-weight-bold'>Residential Projects</h2>
        <Link to="/projects/residential-projects">
        <button className='w-100' style={{height:'45px',backgroundColor:'gray',color:'white',border:'none',outline:'none'}}>SEE MORE</button>
        </Link>
                        </div>
      </div>
      </div>
      
       <div className="col-md-4 col-10 mx-auto" style={{marginBottom:'100px'}}>
      <div className="property-card m-2 bg-white">
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
      <div className="property m-2">
        <FormContainer>
        <Form action="#" method="POST">
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" required />
          <br />

          <Label htmlFor="phone">Phone:</Label>
          <Input type="tel" id="phone" name="phone" required />
          <br />

          <Label htmlFor="address">Address:</Label>
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

export default HomeProjects;const FormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  text-align: center;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  resize:none;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


