import React from "react";
import Movie from "./Movie";

function Movies({ movies = [], onSelectMovie }) {
  return (
    <div className="row">
      {movies.length ? (
        movies.map((movie) => (
          <div className="col s12 m6 l3" key={movie.imdbID}>
            <Movie {...movie} onSelectMovie={onSelectMovie} />
          </div>
        ))
      ) : (
        <div className="center-align" style={{ marginTop: "60px", opacity: 0.6 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486791.png"
            alt="Not found"
            width="130"
            height="130"
            style={{ marginBottom: "20px" }}
          />
          <h5 style={{ color: "#555", marginBottom: "8px" }}>Ничего не найдено</h5>
          <p>Попробуйте изменить поисковый запрос</p>
        </div>
      )}
    </div>
  );
}

export default Movies;
