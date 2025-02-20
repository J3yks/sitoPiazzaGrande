import { Link, useLocation } from "react-router-dom";
import "../styles/Banner.css";


const Banner = () => {
   const location = useLocation();
  return (
    
      <div className="Banner"> 
       <Link to="/work" className={location.pathname === "/work" ? "active" : ""}>DIVENTA UN VOLONTARIO</Link>
      </div>
  
  );
};

export default Banner;