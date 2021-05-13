import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
// import Cast from "../cast/Cast";
import PreviewFilm from "../previewFilm/PreviewFilm";
// import Reviews from "../reviews/Reviews";
import { featchDetailsPage } from "../service/new-api";
import style from "../pages/MovieDetailsPage.module.css";

const Cast = lazy(() => import("../cast/Cast.js" /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() => import("../reviews/Reviews.js" /* webpackChunkName: "reviews-page" */));

class MovieDetailsPage extends Component {
  state = {
    id: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    title: "",
    original_title: "",
    name: "",
    back: {}
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log(movieId);
    featchDetailsPage(movieId).then(data => {
      // console.log("data", data);
      this.setState({ ...data, back: this.props.location.state });
    });
  }

  handleBack = () => {
    const { history } = this.props;
    if (this.state.back?.from) {
      history.push({
        pathname: this.state.back.from,
        search: `query=${this.state.back.search}`,
        state: { search: this.state.back.search }
      });
      return;
    }
    history.push("/");
  };

  render() {
    return (
      <>
        <button className={style.button} type="button" onClick={this.handleBack}>
          GO back
        </button>
        <PreviewFilm
          genres={this.state.genres}
          release_date={this.state.release_date}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          poster_path={this.state.poster_path}
          title={this.state.title}
          original_title={this.state.original_title}
          name={this.state.name}
        />
        <p className={style.List}>Additional information</p>
        <ul className={style.moviePreviewList} key={this.state.id}>
          <li>
            <NavLink className={style.List} to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink className={style.List} to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
