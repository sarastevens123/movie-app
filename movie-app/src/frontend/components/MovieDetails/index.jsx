
const Movie = ({ title, rating, genre }) => {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default Movie;
