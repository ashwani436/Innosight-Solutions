import React from 'react'
import '../Services/Servicecard.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PropertyCard = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 10px;
  margin-top:20px;

  &:hover {
    cursor:pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  height: 45px;
  width:100%;
  background-color: gray;
  color: white;
  margin-top:20px;
  border: none;
  border-radius:5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;


function ServiceCard(props) {
    return (
     <div className="col-md-4 col-10">
      <Link to={props.path}> 
      <PropertyCard>
        <div className="property-img">
          <img src={props.imgsrc} alt="Property" />
        </div>
        <div className="p-5 px-5">
          <h4 className='text-center'>{props.title}</h4>
          <Button>SEE MORE</Button>
        </div>
      </PropertyCard>
    </Link>
    </div>
  );
}

export default ServiceCard