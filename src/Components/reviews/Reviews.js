import React, { Component } from 'react';
import { fetchSearch } from '../service/new-api';
import PropTypes from 'prop-types';
import style from '../pages/MovieDetailsPage.module.css'

class Reviews extends Component {
    state = { 
content: [],
    }
    
componentDidMount() {
    const { movieId } = this.props.match.params
  fetchSearch(movieId).then(data => {
    // console.log(data.results);
        this.setState({content: data.results})
    })
}
    render() {
        return (
            <ul>
          {this.state.content.length ? (
            this.state.content.map(discript => {
              return (
                <li key={discript.id}>
                  <h2>Author:{discript.author}</h2>
                  <p>{discript.content}</p>
                </li>
              );
            })
          ) : (
            <p className={style.message}>We don't have any reviews for this movie</p>
          )}
        </ul>
        );
    }
}

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string,
};