import "../styles/pages.css";

function Work() {
  const imageUrl = "/sitoPiazzaGrande/images/sosta.JPG"; // Usa una variabile per il percorso
  return (
    <div className="container">
      <div
        className="container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-overlay">
        
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
