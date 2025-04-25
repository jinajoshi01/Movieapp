
// FavoritesContext.jsx
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {
    setFavorites(prev =>
      prev.some(m => m.id === movie.id) ? prev : [...prev, movie]
    );
  }

  function removeFavorite(id) {
    setFavorites(prev => prev.filter(m => m.id !== id));
  }

  // -- NEW: toggle & checker --------------------------------
  function toggleFavorite(movie) {
    setFavorites(prev =>
      prev.some(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id) // remove
        : [...prev, movie]                    // add
    );
  }

  function isFavorite(id) {
    return favorites.some(m => m.id === id);
  }
  // ---------------------------------------------------------

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
