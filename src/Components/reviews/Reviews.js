import React, { Component } from 'react';
import { fetchSearch } from '../service/new-api';
class Reviews extends Component {
    state = { 
content: [],
    }
    
componentDidMount() {
    const { movieId } = this.props.match.params
  fetchSearch(movieId).then(data => {
    console.log(data.results);
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
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
        );
    }
}

export default Reviews;