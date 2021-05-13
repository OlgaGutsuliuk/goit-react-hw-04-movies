import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./appBar/AppBar";
// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import MoviesPage from './pages/MoviesPage';
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage.js" /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import("./pages/MoviesPage.js" /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.js" /* webpackChunkName: "movieDetails-page" */));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path={`/movies/:movieId`} component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
