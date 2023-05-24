import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Layout from '../Layout';
import { useGet } from 'restful-react';
import { useMovie } from '../../providers/movies';
import styles from './Home.module.css';
import router from 'next/router';

const IndexPage = () => {
  const { getMovies, MovieGotten } = useMovie();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // useEffect(() => {
  getMovies();
  //   console.log('movie is fetched');
  // }, []);

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };
  
  const handleMovieClick = (movieId) => {
    router.push(`/users/${movieId}`);
  };
  

  const handleClick = (movies) => {
    const videoId = extractVideoId(movies);
    setShowTrailer(videoId);
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu.be\/|https?:\/\/(?:www\.)?youtube\.com\/embed\/)([\w-]{11})(?:.*)/);
    return match ? match[1] : null;
  };
  
  

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={styles.heading}>
        <h1>Popular Movies</h1>
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
