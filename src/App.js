import { useEffect ,useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from './components/navbar/index';
import About from "./components/About/About";
import ResidentialServices from "./components/Services/ResidentialServices";
import CommercialServices from "./components/Services/CommercialServices";
import RetailServices from "./components/Services/RetailServices";
import MarketingConsultingServices from "./components/Services/MarketingConsultingServices";
import LandServices from "./components/Services/LandServices";
import Projects from "./components/Projects/Projects";
import ResidentialProjects from "./components/Projects/ResidentialProjects";
import CommercialProjects from "./components/Projects/CommercialProjects";
import WOW from 'wowjs';
import 'animate.css';




const AppContainer = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



function App() {

   const [scrollDirection, setScrollDirection] = useState('down');

  
useEffect(() => {
    let wow; // Declare Wow.js instance outside the effect
    const scrollThreshold = 100; // Adjust the threshold as needed

    const initWow = () => {
      wow = new WOW.WOW({
        // Initialize Wow.js with options here, if needed
      });
      wow.init();
    };

    // Initialize Wow.js on component mount
    initWow();

    // State to track scroll direction (up or down)
   

    // Function to detect scroll direction
    const detectScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScrollY <= scrollThreshold && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    };

    // Listen for scroll events to detect scroll direction
    window.addEventListener('scroll', detectScrollDirection);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', detectScrollDirection);
    };
  }, [scrollDirection]);


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
        <Route path="/services/residential-services" element={<ResidentialServices />} />
        <Route path="/services/commercial-services" element={<CommercialServices />} />
        <Route path="/services/retail-services" element={<RetailServices />} />
        <Route path="/services/marketing-services" element={<MarketingConsultingServices />} />
        <Route path="/services/land-services" element={<LandServices />} />

        <Route path="/projects/residential-projects" element={<ResidentialProjects />} />
        <Route path="/projects/commercial-projects" element={<CommercialProjects/>} />
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