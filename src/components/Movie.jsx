import React from "react";

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
    onSelectMovie
  } = props;

  return (
    <div
      className="card movie hoverable"
      style={{ cursor: "pointer" }}
      onClick={() => onSelectMovie(id)}
    >
      <div className="card-image">
        <img
          src={poster !== "N/A" ? poster : "https://via.placeholder.com/200x300?text=No+Image"}
          alt={`${title} poster`}
          style={{ height: "400px", width: "100%", objectFit: "cover", background: "#eee" }}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
  );
}

export default Movie;
