import React, { Component } from "react";
import { Link} from "react-router-dom";
import { featchMovies } from "../service/new-api";


class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    featchMovies().then(data => {
      console.log(data.results);
      this.setState({ movies: data.results });
    });
  }
  render() {
    return (
      <>
        <h1> Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={
                 `/movies/${movie.id}`
                }
              >
                {movie.title||movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
