import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import Navbar
import Navbar from './components/navbar/index';
import About from "./components/About/About";
import Services from "./components/Services/Services";
import ResidentialServices from "./components/Services/ResidentialServices";
import CommercialServices from "./components/Services/CommercialServices";
import RetailServices from "./components/Services/RetailServices";
import MarketingConsultingServices from "./components/Services/MarketingConsultingServices";
import LandServices from "./components/Services/LandServices";
import Projects from "./components/Projects/Projects";
// import '../src/App.css';

const AppContainer = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



function App() {
  return (
 
     
      <Router>

      {/* Common Header */}
         <AppContainer>
          <Navbar />

         </AppContainer>
        <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects/>} />
        <Route path="/residential-services" element={<ResidentialServices />} />
        <Route path="/commercial-services" element={<CommercialServices />} />
        <Route path="/retail-services" element={<RetailServices />} />
        <Route path="/consulting-services" element={<MarketingConsultingServices />} />
        <Route path="/land-services" element={<LandServices />} />
        {/* <Route path="/residential-services" element={<Services/>} /> */}
          
          {/* 404 Error Page */}
          {/* <Route component={NotFound} /> */}
        </Routes>

        {/* Common Footer */}
        <Footer />
    </Router>
   

    
  );
}

export default App;


