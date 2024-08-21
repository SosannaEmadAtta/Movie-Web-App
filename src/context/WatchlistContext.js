import React, { createContext, useState, useContext } from 'react';

// Create the context
const WatchlistContext = createContext();

// Create a provider component
export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(movie => movie.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

// Custom hook to use the watchlist context
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};



// import React, { createContext, useContext, useState, useEffect } from 'react';

// const WatchlistContext = createContext();

// export const WatchlistProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState(() => {
//     // Load watchlist from local storage if it exists
//     const savedWatchlist = localStorage.getItem('watchlist');
//     return savedWatchlist ? JSON.parse(savedWatchlist) : [];
//   });

//   useEffect(() => {
//     // Save watchlist to local storage whenever it changes
//     localStorage.setItem('watchlist', JSON.stringify(watchlist));
//   }, [watchlist]);

//   const addToWatchlist = (movie) => {
//     setWatchlist([...watchlist, movie]);
//   };

//   const removeFromWatchlist = (movieId) => {
//     setWatchlist(watchlist.filter(movie => movie.id !== movieId));
//   };

//   return (
//     <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
//       {children}
//     </WatchlistContext.Provider>
//   );
// };

// export const useWatchlist = () => useContext(WatchlistContext);
