import React from "react";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay active" style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div className="card" style={{ width: "90%", maxWidth: "700px", padding: "20px", position: "relative", display: "flex", gap: "20px" }}>
        <button
          className="btn green right"
          onClick={onClose}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <i className="material-icons">close</i>
        </button>

        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
          style={{ height: "350px", width: "auto", objectFit: "contain", borderRadius: "4px" }}
        />

        <div style={{ flex: 1 }}>
          <h4>{movie.Title}</h4>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
