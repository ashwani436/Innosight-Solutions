import React from 'react'
import styled from 'styled-components';
import dlf from '../assets/association/DLF.jpg'
import gaurs from '../assets/association/Gaurs.png';
import godrej from '../assets/association/Godrej_Logo.png';
import gulshan from '../assets/association/LOGO-Gulshan.jpg';
import tgroup from '../assets/association/ltgrouplogo.jpg';
import m3m from '../assets/association/m3m-logo.webp';
import maxlogo from '../assets/association/max-logo.jpg';
import tata from '../assets/association/Tata-Motors-Logo.png';

const AssociationStyle = styled.div`
.marquee {
  /* background-color: aliceblue; */
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
}
.marquee_content {
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  display: flex;
}

.marquee_content img {
  height: 80%;
  padding:25px
}
.marquee_content > div {
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
`


function Association() {
    return (
<AssociationStyle>
    <div className="marquee">
      <div className="marquee_content">
        <div>
          <img src={dlf} />
        </div>
        <div>
          <img src={gaurs} />
        </div>
        {/* <div>
          <img src={tata} />
        </div> */}
        <div>
        <img src={m3m} />
        </div>
        <div>
          <img src={godrej} />
        </div>
        <div>
          <img src={gulshan} />
        </div>
        <div>
          <img src={tgroup} />
        </div>
        <div>
        <img src={maxlogo} />
        </div>
      </div>
            </div>
            </AssociationStyle>
  );
};



export default Association