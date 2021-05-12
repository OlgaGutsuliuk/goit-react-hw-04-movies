import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../cast/Cast";
import PreviewFilm from "../previewFilm/PreviewFilm";
import Reviews from "../reviews/Reviews";
import {featchDetailsPage} from '../service/new-api' 


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
    back: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
  featchDetailsPage(movieId).then(data => {
      console.log('data', data);
      this.setState({ ...data, back: this.props.location.state});
    });
}
  
  handleBack = () => {
    const {history} = this.props;
    if (this.state.back?.from) {
      history.push({pathname: this.state.back.from, search: `query=${this.state.back.search}`, state: {search: this.state.back.search}});
      return;
    } 
    history.push('/');
  }
  
  
  render() {
    return (
      <>
         <button type="button" onClick={this.handleBack}>GO back</button>
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
        <p>Additional information</p>
        <ul key={this.state.id}>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/movies/:movieId/cast' component={Cast} />
          <Route path='/movies/:movieId/reviews' component={Reviews} />
        </Switch>
      </>
   )
  }
}

export default MovieDetailsPage;
