import React from 'react'
import { Data } from './TeamData'
import styled from 'styled-components'

function Teams() {
    return (
      <TeamWrapper>
    <div className='container-fluid'>
    <h1 className='d-flex align-items-center justify-content-center'>Our Team</h1>
    <div className="row mt-5">
          <div className="col-10 mx-auto">
            <div className="row gy-4 card-alignment wow animate__fadeInDownBig" data-wow-duration="1s">
              {
                Data.map((val,index)=>{
                  return (
                    <div className="col-lg-3 col-6 mb-4 team-members">
                    <div className="card" style={{backgroundColor:'aliceblue'}}>
                        <img key={index} src={val.img} className="card-img-top image p-2" alt={val.name} />
                      <div className="card-body">
                        <h6 className='name'>{val.name}</h6>
                        <h6 className="designation">{val.designation}</h6>
                        <p className="designation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime dolorem aut sequi vero laborum minima dicta corporis enim porro, quam deleniti vel quidem mollitia soluta animi error excepturi nisi.</p>
                      </div>
                </div>
                </div>
                  )
                })
              }
            </div>
    
    </div> 
    </div>  
            </div>
            </TeamWrapper>
  )
}

export default Teams

const TeamWrapper=styled.div`
.heading{
  display:flex;
  align-items:center;
  justify-content:center;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin-top:7%;
}

.tablist{
  display:flex;
  margin-top:30px;
}
.card{
  display:flex;
  border: none;
  align-items:center;
  justify-content:center;
}
.image{
  width:50%;
  border-radius:50%;
}
.name{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-align:center;
}
.designation{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #787D91;
  text-align:center;
}
.card-alignment{
  display:flex;
  align-items:center;
  justify-content:center;
}
@media screen and (max-width: 600px){
  .tablist{
    display:initial;
  }
  .name{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align:center;
    }
    .designation{
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #787D91;
      text-align:center;
    }
    .image{
      width:70%;
    }
}
`; 