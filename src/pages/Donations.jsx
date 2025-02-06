import DonationButton from "../components/DonationButton";

import "../styles/pages.css";

function Donations() {
  const imageUrl = "/images/lucchetto.JPG"; // Usa una variabile per il percorso
  const pdfPath = "/documents/iscrizione.pdf"; 
  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
          <p>Ti va di CREDERE nei GIOVANI?</p>
        </div>
      </div>
      <div className="text-content">
        <h1>SOSTIENICI</h1>
        <p>
          Piazza Grande è fatta di giovani volontari che hanno voluto dedicare
          il proprio tempo e le proprie energie per qualcosa di grande, con
          passione e gratuità. Se condividi la nostra visione, puoi aiutarci a
          fare la differenza con una donazione o destinando il tuo 5x1000 alla
          nostra associazione.
        </p>
        <p>
          Ogni contributo, grande o piccolo, ci permette di offrire ai nostri
          ragazzi attività ed esperienze di qualità che potranno portare per
          sempre nel cuore.
        </p>
        <h1>Cosa finanzio?</h1>
        <ul>
          <li>L&apos;acquisto di materiali utili alle attività</li>
          <li>La formazione dei volontari</li>
          <li>
            L&apos;ammortamento delle spese per le uscite e campeggi per le
            famiglie a basso reddito
          </li>
        </ul>
        <h1>Dona ora</h1>
        <div className="donation-container">
       <p> Dona ora con PayPal o carta di credito, basta un semplice click.</p>
       <div className="donationButton">
          <DonationButton />
        </div>
        <p>Oppure sostienici tramite bonifico bancario o con il 5x1000</p>
        <p>IBAN: IT34Y0623024120000035867234</p>
        </div>
        <h1>Come donare il tuo 5x1000 a Piazza Grande?</h1>
        <p>
          In fase di compilazione del modulo 730 puoi firmare il riquadro di
          competenza delle onlus e inserire il codice fiscale dell&apos;
          Associazione Giovanile Piazza Grande:
        </p>
        <div className="cf">
        <img src="/images/codice730.png" alt="91182980408"></img>
        </div>
        <h1>Diventa un socio</h1>
        <a href={pdfPath} download="iscrizione.pdf">
        Scarica il modulo di iscrizione!
      </a>
      </div>
    </div>
  );
}

export default Donations;
