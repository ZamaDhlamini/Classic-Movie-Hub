import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useGet } from 'restful-react';

const IndexPage = () => {
  const { error, loading, data } = useGet({ path: '/Movie/GetAll' });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const movies = data.result;

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Welcome to Movie Buff! 👋</h1>
      <div>
        {movies.map((movie) => (
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
