import React from "react";
import { useWatchlist } from '../../../context/WatchlistContext';
import MovieCard from '../card/card';

function WatchList() {
  const { watchlist } = useWatchlist();

  return (
    <div>
      <h1>Your Watchlist</h1>
      {watchlist.length === 0 ? (
      <p style={{ fontStyle: "italic", color: "grey", textAlign: "center" }}>No movies yet!</p>
 
      ) : (
        <div className="movie-container">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
