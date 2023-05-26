import Link from 'next/link';
import Layout from '../../components/Layout';
import { useMovie } from '../../providers/movies';
import { useEffect, useState } from 'react';
import { useMutate } from 'restful-react';
import { useUsers } from '../../providers/users';

const MovieList = () => {
  const { getMovies, MovieGotten } = useMovie();
  const { login } = useUsers();
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const createMovieListMutation = useMutate({
    verb: 'POST',
    path: '/MovieListAbpApp/CreateList',
  });
  


  useEffect(() => {
    getMovies();
    console.log('movie is fetched');
  }, []);

  const handleAddToList = async (personId, movieId) => {
    try {
      await createMovieListMutation.mutate({
        personId,
        movieId,
      });
      console.log('Movie list created successfully');
    } catch (error) {
      console.error('Error creating movie list:', error);
    }
  };

  const personId = user?.personId;


  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Movie Gallery</h1>
      <p>These are your movies</p>
      <div className="movie-grid">
        {MovieGotten.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onMouseEnter={() => setHoveredMovie(movie)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <h1>{movie.title}</h1>
            <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
            {hoveredMovie?.id === movie.id && (
              <button onClick={() => handleAddToList(personId, movie.id)}>Add</button>
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
