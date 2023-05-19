import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useGet } from 'restful-react';
import { useMovie } from '../providers/movies';

const IndexPage = () => {

  const { getMovies, MovieGotten} = useMovie();

  useEffect(() => {
      getMovies();
      console.log('movie is fetched')
    }, []);
    
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Welcome to Movie Buff! 👋</h1>
      <div>
        {MovieGotten.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.duration}</p>
            <p>Staring: {movie.starring}</p>
            <p>Genre: {movie.genreName}</p>
            <p>Year: {movie.year}</p>
            <p>Description: {movie.description}</p>
            <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'}/>
            <video width="300" height="auto" controls>
              <source src={movie.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
