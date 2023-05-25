// import Link from 'next/link';
// import Layout from '../../components/Layout';
// import { useMovie } from '../../providers/movies';
// import { useEffect } from 'react';

// const MovieList = () => {
//   const { getMovies, MovieGotten } = useMovie();


//   useEffect(() => {
//     getMovies();
//     console.log('movie is fetched');
//   }, []);


//   return (
//     <Layout title="About | Next.js + TypeScript Example">
//       <h1 >Movie Gallery</h1>
//       <p>These are your movies</p>
//       <div className="movie-grid">
//         {MovieGotten.map((movie) => (
//           <div key={movie.id} className="movie-item">
//             <h1>{movie.title}</h1>
//             <img src={movie.picture} alt={movie.title} width={'300px'} height={'420px'} />
//           </div>
//         ))}
//       </div>
//       <p>
//         <Link href="/">Go home</Link>
//       </p>


//       <style jsx>{`
//         .movie-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           grid-gap: 20px;
//         }


//         .movie-item {
//           padding: 10px;
//         }
//       `}</style>
//     </Layout>
//   );
// };


// export default MovieList;
