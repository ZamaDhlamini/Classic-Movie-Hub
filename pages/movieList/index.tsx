import Link from 'next/link';
import Layout from '../../components/Layout';
import { useMovie } from '../../providers/movies';
import { useEffect, useState } from 'react';
import { useMutate } from 'restful-react';
import { useUsers } from '../../providers/users';

const MovieList = () => {
  const { getMovies, MovieGotten } = useMovie();
  const { login, Login } = useUsers(); // Remove unnecessary Login constant
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const createMovieListMutation = useMutate({
    verb: 'POST',
    path: '/MovieListAbpApp/CreateList',
  });

  const handleAddToWatchlist = (movieId, userId) => {
    createMovieListMutation.mutate({ movieId, userId });
  };

  useEffect(() => {
    getMovies();
    console.log('movies are fetched');
  }, []);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Movie Gallery</h1>
      <p>These are your movies</p>
      <div className="movie-grid">
        {MovieGotten && MovieGotten.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
          >
            <h1>{movie.title}</h1>
            <img
              src={movie.picture}
              alt={movie.title}
              width={'300px'}
              height={'420px'}
              onMouseEnter={() => setHoveredMovie}
              onMouseLeave={() => setHoveredMovie(null)}
            />
            {hoveredMovie && (
              <div className="user-grid">
                {Login && Login.map((user) => (
                  <div key={user.id} className="user-item">
                    <button onClick={() => handleAddToWatchlist(movie.id, user.id)}>
                      Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p>
        <Link href="/">Go home</Link>
      </p>
  
      <style jsx>{`
        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 20px;
        }
  
        .movie-item {
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
  
  
  
};

export default MovieList;
