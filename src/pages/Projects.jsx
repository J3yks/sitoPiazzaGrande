import "../styles/pages.css";

function Projects() {
  const imageUrl = "/sitoPiazzaGrande/images/gioco.JPG"; // Usa una variabile per il percorso
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
        <h1>I NOSTRI PROGETTI</h1>
        <h2>PERCORSO ANNUALE EDUCATIVO</h2>
        <p>
          A cadenza bisettimanale si tengono incontri formativi, ludici ed
          educativi rivolti ai ragazzi delle scuole medie e superiori. Tali
          incontri vengono reati ad hoc, dopo un&apos;attenta analisi delle
          caratteristiche del gruppo e sulla base delle esigenze percepite dal
          nostro team. All interno del percorso vengono realizzate uscite di
          due, tre o quattro giorni.
        </p>
        <h2>DOPOSCUOLA</h2>
        <p>
          Da marzo a maggio 2024, tutti i giovedì, abbiamo dato vita ad un
          doposcuola rivolto ai ragazzi e ragazze delle scuole medie di
          Cattolica e dintorni per accompagnarli durante il loro percorso
          scolastico. Grazie al progetto di alternanza scuola-lavoro (PCTO)
          hanno avuto l&apos;opportunità di sostenerci e mettersi in gioco anche
          alcuni ragazzi e ragazze delle scuole superiori di Pesaro. Il progetto
          è stato accolto con grande entusiasmo dall&apos;intera comunità. Per
          questo, da gennaio 2025, abbiamo avviato un doposcuola pomeridiano
          nelle scuole medie di Cattolica e Misano Adriatico, finanziato dal
          piano di zona del distretto di Riccione. L&apos;iniziativa si svolgerà
          all&apos;interno degli istituti scolastici per quattro giorni a
          settimana fino alla fine di marzo 2025.
        </p>
        <h2>SCUOLA EDUCATORI</h2>
        <p>
          Siamo sempre in crescita desideriamo per il futuro di Piazza Grande
          persone formate e pronte ad affrontare nuove sfide. Per questo abbiamo
          attivato il percorso di scuola educatori; lavoriamo insieme su
          comunicazione e ascolto attivo con l obiettivo di fornire una
          formazione adeguata e funzionale ai nostri servizi.
        </p>
        <h2>FADIGA FESTIVAL</h2>
        <p>
          Nel 2023 abbiamo partecipato e vinto il bilancio partecipativo
          regionale grazie al quale abbiamo dato vita al Fadiga Festival! Un
          festival di rigenerazione urbana che ha ospitato diversi artisti della
          zona. Spazio giochi, musica dal vivo, graffiti contest e zone di relax
          e ristoro.{" "}
        </p>
        <h2>OPEN MIC</h2>
        <p>
          Dal 2021, per tre estati consecutive, abbiamo organizzato open mic al
          be kind di Cattolica. Tale format si pone l&apos;obiettivo di dare, a
          chiunque lo desideri, voce e ascolto. Decine di artisti si sono
          susseguiti: poeti, cantautori, cantanti, musicisti, stand up
          comidian... Sono state quattro bellissime serate all insegna del
          divertimento che ci hanno permesso di portare avanti uno dei nostri
          obiettivi: l&apos;incremento dell&apos;espressione di sé.
        </p>
      </div>
    </div>
  );
}

export default Projects;
