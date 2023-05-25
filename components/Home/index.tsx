import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Layout from '../Layout';
import { useGet, useMutate } from 'restful-react';
import { useMovie } from '../../providers/movies';
import styles from './Home.module.css';
import router from 'next/router';

const IndexPage = () => {
  const { getMovies, MovieGotten, searchMovie } = useMovie();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const { mutate: addToFavoriteList } = useMutate({
    verb: 'POST',
    path: 'https://localhost:44311/api/services/app/MovieListAbpApp/CreateList',
  });

  useEffect(() => {
    getMovies();
  }, [searchInput]);

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };
  
  const handleMovieClick = (movieId) => {
    router.push(`/users/${movieId}`);
  };

  const AddToFavoriteList = (movieId) => {
    addToFavoriteList({ movieId })
      .then(() => {
        console.log('Movie added to favorite list successfully');
      })
      .catch((error) => {
        console.error('Failed to add movie to favorite list', error);
      });
  };
  

  const handleClick = (movies) => {
    const videoId = extractVideoId(movies);
    setShowTrailer(videoId);
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu.be\/|https?:\/\/(?:www\.)?youtube\.com\/embed\/)([\w-]{11})(?:.*)/);
    return match ? match[1] : null;
  };

  const handleSearch = () => {
    searchMovie(searchInput);
  };
  
  

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={styles.heading}>
        <h1>Popular Movies</h1>
      </div>
      <div>
          <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      <div className={styles.grid}>
        {MovieGotten?.map((movie) => (
          <div
            key={movie.id}
            className={`${styles.movie} ${hoveredMovieId === movie.id ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
           <Link href={`/users/${movie.id}`}>
              <div className={styles.imageContainer}>
                <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <p>Duration: {hoveredMovieId === movie.id ? movie.duration : ''}</p>
                    <p>Starring: {hoveredMovieId === movie.id ? movie.starring: ''}</p>
                    <p>Genre: {hoveredMovieId === movie.id ? movie.genreName : ''}</p>
                    <p>Year: {hoveredMovieId === movie.id ? movie.year : ''}</p>
                  </div>
                </div>
              </div>
            </Link>
            <button onClick={() => handleClick(movie.movies)} className={styles.logoButton}>
              <img src="logo.png" alt="Logo" className={styles.logo} />
            </button>
            <button onClick={() => AddToFavoriteList(movie.id)} className={styles.starButton}>
              <img src="starlogo.png.png" alt="star logo" className={styles.starLogo}/>
            </button>
            <h1 className={styles.movieTitle}>{movie.title}</h1>
            {showTrailer && (
            <iframe
              src={`https://www.youtube.com/embed/${showTrailer}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
                 />
                 )}
              {/* <button onClick={() => handleClick(movie.movies)} className={styles.trailerBUtton}>View Trailer</button> */}
              {/* <button onClick={() => handleMovieClick(movie.movies)} className={styles.movieBUtton}>view movie</button> */}
          </div>
        ))}
      </div>
      <p>
        <Link href="/video">go to video</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
