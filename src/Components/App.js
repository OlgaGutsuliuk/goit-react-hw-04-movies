import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <>
            <AppBar/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
                <Route exact path='/movies' component={MoviesPage} />
                <Route path={`/movies/:movieId`} component={MovieDetailsPage} />
            <Route component={NotFound}/>
      </Switch>
  </>         
    )
}
   


export default App;