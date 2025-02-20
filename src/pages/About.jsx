import "../styles/pages.css";

function About() {
  const imageUrl = "/sitoPiazzaGrande/images/fotoEdu.jpg"; // Usa una variabile per il percorso
  const pdfPathR1 = "/sitoPiazzaGrande/documents/rendiconto_2021.pdf"; // Percorso relativo dalla cartella public
  const googleViewerUrlR1 = `https://docs.google.com/gview?url=${window.location.origin}${pdfPathR1}&embedded=true`;
  const pdfPathR2 = "/sitoPiazzaGrande/documents/rendiconto_2022.pdf"; // Percorso relativo dalla cartella public
  const googleViewerUrlR2 = `https://docs.google.com/gview?url=${window.location.origin}${pdfPathR2}&embedded=true`;
  const pdfPathR3 = "/sitoPiazzaGrande/documents/rendiconto_2023.pdf"; // Percorso relativo dalla cartella public
  const googleViewerUrlR3 = `https://docs.google.com/gview?url=${window.location.origin}${pdfPathR3}&embedded=true`;
  const pdfPathStat = "/sitoPiazzaGrande/documents/STATUTO_PIAZZAGRANDEAPS.pdf"; // Percorso relativo dalla cartella public
  const googleViewerUrlStat = `https://docs.google.com/gview?url=${window.location.origin}${pdfPathStat}&embedded=true`;
  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
          
        </div>
      </div>
      <div className="text-content">
        <h1>Chi siamo?</h1>
        <p>
          Piazza Grande nasce nel 2021 dal desiderio di un gruppo di amici,
          accomunati dalla passione per l&apos;educazione e il volontariato, di
          creare per i giovani del territorio uno spazio di incontro con
          l&apos;Altro, proprio come quello che cantava Lucio Dalla.
        </p>

        <p>
          Siamo insegnanti, educatori, counselor, studenti universitari,
          infermiere, commercialiste. Abbiamo deciso di spendere le nostre
          esperienze e competenze a favore della comunità, per rendere il nostro
          territorio sempre più aperto e inclusivo.
        </p>
        <p>
          Nella nostra “piazza”, ogni voce conta e ogni storia trova ascolto.
        </p>
        <p>
          Da anni ognuno di noi si dedica al servizio educativo e al
          volontariato, sotto forme ogni volta diverse ma sempre con spirito di
          gratuità: piantiamo semi credendo nella bellezza di ciò che può
          crescere, e quella bellezza è la nostra più grande ricompensa.
        </p>

        <h1>Cosa facciamo?</h1>
        <p>
          Organizziamo incontri, dibattiti e approfondimenti sui grandi temi
          dell&apos;Oggi, creando al tempo stesso momenti di socialità aperta e
          accogliente, per aiutare i ragazzi a sviluppare uno sguardo critico
          sul presente e immaginare insieme nuove prospettive per il domani.
        </p>

        <h1>Trasparenza</h1>
        <div className="file-anchor">
        <a href={googleViewerUrlStat} target="_blank" rel="noopener noreferrer">
        Statuto
      </a>  
        <a href={googleViewerUrlR1} target="_blank" rel="noopener noreferrer">
        Bilancio 2021
      </a>
      <a href={googleViewerUrlR2} target="_blank" rel="noopener noreferrer">
        Bilancio 2022
      </a>  
      <a href={googleViewerUrlR3} target="_blank" rel="noopener noreferrer">
        Bilancio 2023
      </a>  
      
      </div>
      </div>
    </div>
  );
}

export default About;
