import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../Layout';
import { useGet } from 'restful-react';
import { useMovie } from '../../providers/movies';
import styles from './Home.module.css';

const IndexPage = () => {
  const { getMovies, MovieGotten } = useMovie();

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

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={styles.heading}>
        <h1>Popular Movies</h1>
      </div>
      <div className={styles.grid}>
        {MovieGotten?.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.duration}</p>
            <p>Starring: {movie.starring}</p>
            <p>Genre: {movie.genreName}</p>
            <p>Year: {movie.year}</p>
            <p className={styles.description}>Description: {movie.description}</p>
            <Link href="/video">
              <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
            </Link>
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
