
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import DonationButton from "./components/DonationButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Donations from "./pages/Donations"
import Completato from "./pages/Completato"
import "./styles/default.css";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Banner/>
      <div className="nav-donation">    
       < div className="nav">
         <Navbar />
       </div> 
   
      <div className="donationButton">
      <DonationButton/>
      </div>
       </div>
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/completato" element={<Completato />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
