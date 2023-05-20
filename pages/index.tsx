import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useGet } from 'restful-react';
import { useMovie } from '../providers/movies';

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
      <h1>Welcome to Movie Buff! 👋</h1>
      <div>
        {MovieGotten?.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.duration}</p>
            <p>Starring: {movie.starring}</p>
            <p>Genre: {movie.genreName}</p>
            <p>Year: {movie.year}</p>
            <p>Description: {movie.description}</p>
            <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
            <iframe
              className={movie.videoUrl}
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(movie.videoUrl)}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
