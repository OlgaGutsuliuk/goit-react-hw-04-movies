import React from "react";

const PreviewFilm = ({genres, release_date, overview, vote_average, poster_path, title, name }) => {
    return (
    <>
      <div>
          <div>
           
         {poster_path? <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />: <h2>Нет картинки</h2>}
        </div>
        <div>
          <h1>
            {name || title} ({parseInt(release_date)})
          </h1>
          <p>User source {(vote_average) * 10}% </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul className="MoviePreviewList">
            {genres.map(genre => (
              <li key={genre.id}> {genre.name} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PreviewFilm;
