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
      <h1>Hello Next.js 👋</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.duration}</p>
            <p>Staring: {movie.staring}</p>
            <p>Category: {movie.category}</p>
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
