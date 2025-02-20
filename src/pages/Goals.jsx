import "../styles/pages.css";

function Goals() {
  const imageUrl = "/sitoPiazzaGrande/images/bisogno.JPG"; // Usa una variabile per il percorso
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
        <h1>I NOSTRI OBIETTIVI</h1>
        <h2>AGGREGAZIONE - INCLUSIONE - COOPERAZIONE</h2>
        <p>
          In un mondo sempre più frammentato, virtuale e divisivo, creiamo una
          rete di relazioni autentiche, un contesto aperto ed inclusivo, dove
          poter sperimentare il valore dell&apos;ascolto, del rispetto sincero e
          dell&apos;amicizia.
        </p>
        <h2>EDUCAZIONE ALLA CRESCITA PERSONALE</h2>
        <p>
          L&apos;educazione va oltre la semplice trasmissione di contenuti: è un
          processo che richiede pazienza, ascolto e cura. Di fronte al
          diffondersi tra i giovani di nichilismo, dipendenze e depressione,
          offriamo a ragazzi e ragazze percorsi e attività che li aiutino a
          capire meglio se stessi, per realizzarsi e dare forma a un progetto di
          vita positivo e felice.
        </p>
        <h2>
          INFORMAZIONE E SENSIBILIZZAZIONE RISPETTO ALLE GRANDI SFIDE
          DELL&apos;OGGI
        </h2>
        <p>
          Approfondiamo temi come globalizzazione, crisi demografica,
          cambiamento climatico e disuguaglianze, promuovendo lo sviluppo di una
          coscienza critica per affrontare insieme queste sfide con
          consapevolezza e immaginare una società più giusta e solidale.
        </p>
        <h2>INCORAGGIAMENTO ALLA CREATIVITÀ E ALL&apos;ESPRESSIONE DI SÉ</h2>
        <p>
          Aiutiamo i ragazzi a riconoscere e coltivare le proprie unicità,
          incentivando la loro creatività e offrendo loro spazi e occasioni per
          esprimerla in totale libertà, convinti che il cambiamento passi
          attraverso le potenzialità e le intuizioni delle nuove generazioni.
        </p>
        <h2>PROMOZIONE DEL VOLONTARIATO E DELLA RESPONSABILITÀ EDUCATIVA</h2>
        <p>
          Per contrastare le dinamiche competitive tipiche della società della
          performance, stimoliamo nei giovani il desiderio di mettere le proprie
          risorse a servizio degli altri. Promuoviamo una cittadinanza attiva,
          incarnata in opere di volontariato per i più piccoli e i più fragili,
          che rappresenta la concreta edificazione di una società solidale e di
          una cultura dell&apos;amore.
        </p>
      </div>
    </div>
  );
}

export default Goals;
