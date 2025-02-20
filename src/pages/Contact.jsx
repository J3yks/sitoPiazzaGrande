import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaAt, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import "../styles/Contact.css";
import "../styles/pages.css";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const imageUrl = "/sitoPiazzaGrande/images/camminata.JPG"; /*foto*/

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o4i4tdq", "template_ff6u3y5", form.current, {
        publicKey: "GHmXmlSDlw92F4Lbs",
      })
      .then(
        () => {
          setMessage("Messaggio inviato con successo");

          form.current.reset();
        },
        (error) => {
          setMessage("Errore nell'invio del messaggio");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
         
        </div>
      </div>
      <div className="form-container">
        <div className="contact-info">
          <h1>Contatti</h1>
          <p>
            <FaEnvelope /> <strong>Email:</strong> piazzagrande.aps@gmail.com
          </p>
          <p>
            <FaAt /> <strong>PEC:</strong> piazzagrande.aps@pec.it
          </p>
          <p>
            <FaMapMarkerAlt /> <strong>Dove trovarci:</strong> Centro giovani di
            Cattolica (RN) in via del Prete, 119
          </p>
          <p>
            <FaHome /> <strong>Sede legale:</strong> Via F. Petrarca N. 31/A,
            47841 Cattolica (RN)
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AssociazioneGiovanilePiazzaGrande"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1877F2" }}
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/piazzagrandecattolica"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h1>Inviaci un messaggio!</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="field">
              <label>Nome</label>
              <input type="text" name="user_name" required/>
            </div>
            <div className="field">
              <label>Cognome</label>
              <input type="text" name="user_surname" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="user_email" required/>
            </div>
            <div className="field">
              <label>Messaggio</label>
              <textarea name="message" />
            </div>
            <input type="submit" value="Invia messaggio" required/>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};
export default Contact;
