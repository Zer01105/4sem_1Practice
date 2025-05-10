import React, { Component } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import MovieModal from "../components/MovieModal";

const API_KEY = "81014f67"; // Замени на свой, если нужно

class Main extends Component {
  state = {
    movies: [],
    loading: true,
    selectedMovie: null,
  };

  componentDidMount() {
    console.log("Main mounted");
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => {
        console.log("OMDb initial fetch:", data);
        this.setState({ movies: data.Search || [], loading: false });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Search response:", data);
        this.setState({ movies: data.Search || [], loading: false });
      })
      .catch((err) => {
        console.error("Search fetch error:", err);
        this.setState({ loading: false });
      });
  };

  selectMovie = (id) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Selected movie:", data);
        this.setState({ selectedMovie: data });
      })
      .catch((err) => console.error("Movie details fetch error:", err));
  };

  closeModal = () => {
    this.setState({ selectedMovie: null });
  };

  render() {
    const { movies, loading, selectedMovie } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} onSelectMovie={this.selectMovie} />
        )}
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={this.closeModal} />
        )}
      </main>
    );
  }
}

export default Main;
