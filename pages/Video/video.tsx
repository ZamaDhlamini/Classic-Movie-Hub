// import React, { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useMovie } from "../../providers/movies";

// const VideoPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const { MovieGotten } = useMovie();

//   const foundMovie = MovieGotten?.find((movie) => movie.id.toString() === id);


//   return (
//     <div>

//       <h1>this is where your movies should go</h1>
//       {foundMovie ? (
//         <div>
//           <h2>{foundMovie.title}</h2>
//           <p>{foundMovie.description}</p>
//           <p>{foundMovie.starring}</p>
//           <p>{foundMovie.year}</p>
//           <p>{foundMovie.duration}</p>
//         </div>
//       ) : (
//         <p>Loading or Movie Not Found</p>
//       )}
//     </div>
//   );
// };

// export default VideoPage;
