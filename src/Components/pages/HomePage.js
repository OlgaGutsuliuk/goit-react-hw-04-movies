import React, { Component } from "react";
import { Link} from "react-router-dom";
import { featchMovies } from "../service/new-api";
import style from '../navigation/Navigation.module.css'

class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    featchMovies().then(data => {
      // console.log(data.results);
      this.setState({ movies: data.results });
    });
  }
  render() {
    return (
      <>
        <h1 className={style.title}>  Trending today</h1>
        <ul className={style.filmInfo_text}>
          {this.state.movies.map(movie => (
            <li   key={movie.id}>
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
