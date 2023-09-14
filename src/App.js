import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import Navbar
import Navbar from './components/navbar/index';

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


