import "../styles/pages.css";

function Home() {
  const imageUrl = "/sitoPiazzaGrande/images/fieno.JPG"; // Usa una variabile per il percorso
  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
          <p>
            &quot;I giovani non sono vasi da riempire ma fuochi da
            accendere&quot; - <i>Plutarco</i>
          </p>
        </div>
      </div>
      <div className="text-content">
        <h1>Vision</h1>
        <p>
          Immaginiamo una società in cui i giovani possano realmente essere i
          protagonisti del cambiamento, capaci di costruire relazioni autentiche
          e diventare adulti consapevoli, solidali… felici.
        </p>
        <p>
          Un mondo in cui educazione e responsabilità sociale siano i motori di
          un&apos;evoluzione, di una crescita reale, in grado di trasformare le
          sfide in opportunità.
        </p>
        <h1>Mission</h1>
        <p>
          Piazza Grande si impegna a creare spazi di incontro e confronto per i
          giovani del territorio, trasmettendo il valore dell&apos;educazione come
          strumento di crescita personale e cambiamento sociale. Attraverso le
          nostre attività e i nostri progetti, vogliamo aiutare ragazzi e
          ragazze a scoprire il proprio potenziale, mettersi in gioco, imparare
          a conoscere le persone e il mondo attorno a loro, per affacciarsi al
          futuro come cittadini inclusivi e consapevoli.
        </p>
      </div>
    </div>
  );
}

export default Home;
