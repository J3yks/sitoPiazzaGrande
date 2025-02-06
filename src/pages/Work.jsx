import "../styles/pages.css";

function Work() {
  const imageUrl = "/images/sosta.JPG"; // Usa una variabile per il percorso
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
          <h1>Lavora con noi</h1>
          <p>plz</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
