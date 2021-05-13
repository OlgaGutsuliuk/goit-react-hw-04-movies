import React, { Component } from 'react';
import { fetchCast } from '../service/new-api'
import PropTypes from 'prop-types';
import style from '../pages/MovieDetailsPage.module.css'


class Cast extends Component {
    state = {  
        cast: [],
    }

    componentDidMount() {
        const {movieId}=this.props.match.params
        fetchCast(movieId).then(actor => {
            // console.log(actor.cast);
            this.setState({ cast: actor.cast})
        })
}
    render() {
        const { cast } = this.state;
        return (
            <>
               <ul className={style.filmInfo}>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <div className={style.images}>
                 <img
                  src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                  alt={`Photo ${actor.name}: this actor`}
                /> 
                </div>
                

                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul> 
                </>
        );
    }
}

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};