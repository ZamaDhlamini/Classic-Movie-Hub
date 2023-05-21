import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../Layout';
import { useGet } from 'restful-react';
import { useMovie } from '../../providers/movies';
import styles from './Home.module.css';

const IndexPage = () => {
  const { getMovies, MovieGotten } = useMovie();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    getMovies();
    console.log('movie is fetched');
  }, []);

  const extractYouTubeVideoId = (url) => {
    if (url) {
      const trailerId = url.replace('https://youtu.be/', '');
      return trailerId;
    }
    return null;
  };

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
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
            <Link href="/video">
              <div className={styles.imageContainer}>
                <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <p>Duration: {hoveredMovieId === movie.id ? movie.duration : ''}</p>
                    <p>Starring: {hoveredMovieId === movie.id ? movie.starring : ''}</p>
                    <p>Genre: {hoveredMovieId === movie.id ? movie.genreName : ''}</p>
                    <p>Year: {hoveredMovieId === movie.id ? movie.year : ''}</p>
                  </div>
                </div>
              </div>
            </Link>
            <h1 className={styles.movieTitle}>{movie.title}</h1>
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(movie.videoUrl)}`}
              allowFullScreen
            ></iframe>
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
