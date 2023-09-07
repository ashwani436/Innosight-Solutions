import styled from "styled-components";
import { Navbar } from "./components/navbar";
import logo from './components/assets/Innosight.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const AppContainer = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoStyling = styled.div`
position: absolute;
top:5px;
left:5px;
border-radius: 100px;
.logo{
  width:150px;
  height: 100px;
  border-radius: 50px;
}
`;


function App() {
  return (
 
     
      <Router>

      {/* Common Header */}
         <AppContainer>
      <Navbar />
       <LogoStyling>
        <img className="logo" src={logo} alt="logo" />
        </LogoStyling>
         </AppContainer>
        <Routes>
         <Route path="/" element={<Home />} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          
          {/* 404 Error Page */}
          {/* <Route component={NotFound} /> */}
        </Routes>

        {/* Common Footer */}
        <Footer />
    </Router>
   

    
  );
}

export default App;


