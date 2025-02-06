import "../styles/pages.css";

function Projects() {
  const imageUrl = "/images/gioco.JPG"; // Usa una variabile per il percorso
  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
          <p>
            &quot;SCRIVERE QUALCOSA DI FIGO&quot; - <i>Plutarco</i>
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>Progetti</h1>
          <p>
            Scopri i progetti che stiamo portando avanti per migliorare la
            comunità.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;