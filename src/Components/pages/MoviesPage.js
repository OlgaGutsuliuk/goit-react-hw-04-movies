import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {fetchSearch} from '../service/new-api'

class MoviesPage extends Component {
  state = {
    results: [],
    value: ""
  };

  componentDidMount() {
    this.props.location?.state?.search && fetchSearch(this.props.location.state.search).then(data => {
      console.log(data);
      this.setState({results: data.results})
    })
  }

  
  
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
    fetchSearch(this.state.value).then(data => {
      console.log(data);
      this.setState({results: data.results})
    })
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };







    render() {
      //  console.log(this.state);
      return (
        <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} autoFocus />
        <button type="submit">Search</button>
          </form>
          <ul>
          {this.state.results.map(film => (
            <li key={film.id}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: this.props.location.pathname, search: this.state.value},
                }}
              >
                {film.original_name ||
                  film.name ||
                  film.original_title ||
                  film.title}
              </NavLink>
            </li>
          ))}
        </ul>
          </>
    );
  }
}

export default MoviesPage;
