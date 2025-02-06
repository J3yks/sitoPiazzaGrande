import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Description">
        <h4>Associazione Giovanile Piazza Grande</h4>
        <p>CF: 91182980408</p>
      </div>
      <div className="social-container">
        <h4>Seguici su:</h4>
        <div className="social">
          <a
            href="https://www.facebook.com/AssociazioneGiovanilePiazzaGrande"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/piazzagrandecattolica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
