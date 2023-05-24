import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useMovie } from "../../providers/movies";
import styles from './videoid.module.css';

const VideoPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { MovieGotten } = useMovie();
  console.log("MyID::", id);

  const foundMovie = MovieGotten?.find((movie) => movie.id === id);

  return (
    <div className={styles.container}>
      {foundMovie ? (
        <div>
          <h2>{foundMovie.title}</h2>
          <iframe
            src={foundMovie.movies}
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.description}>
            <h3>Description:</h3>
            <p>{foundMovie.description}</p>
          </div>
          <div className={styles.details}>
            <h3>Details:</h3>
            <p>Starring: {foundMovie.starring}</p>
            <p>Year: {foundMovie.year}</p>
            <p>Duration: {foundMovie.duration}</p>
          </div>
        </div>
      ) : (
        <p>Loading or Movie Not Found</p>
      )}
    </div>
  );
};

export default VideoPage;
