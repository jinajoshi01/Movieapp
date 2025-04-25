// MovieCard.jsx
import "../css/MovieCard.css";
import { useFavorites } from "../context/FavoritesContext";

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favored = isFavorite(movie.id);

  function onHeartClick() {
    toggleFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />

        <div className="movie-overlay">
          <button
            className="favorite-btn"
            onClick={onHeartClick}
            /* optional aria for accessibility */
            aria-label={favored ? "Remove from favorites" : "Add to favorites"}
          >
            {favored ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
