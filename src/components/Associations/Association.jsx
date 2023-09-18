import React from 'react'
import facebook from '../assets/association/facebook.png';
import sup from '../assets/association/super.png';
import twitter from '../assets/association/twitter.jpg';
import pngtree from '../assets/association/pngtree.jpg';
import styled from 'styled-components';

const AssociationStyle = styled.div`
.marquee {
  width: 100%;
  margin-bottom: 50px;
  overflow: hidden;
}
.marquee_content {
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  display: flex;
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
          <img src={facebook} />
        </div>
        <div>
          <img src={twitter} />
        </div>
        <div>
          <img src={pngtree} />
        </div>
        <div>
        <img src={sup} />
        </div>
        <div>
          <img src={facebook} />
        </div>
        <div>
          <img src={twitter} />
        </div>
        <div>
          <img src={pngtree} />
        </div>
        <div>
        <img src={sup} />
        </div>
      </div>
            </div>
            </AssociationStyle>
  );
};



export default Association