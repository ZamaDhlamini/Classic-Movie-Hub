import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useMovie } from "../../providers/movies";
import styles from './videoid.module.css';
import { DiscussionEmbed } from 'disqus-react';

/*DISQUS*/
declare global {
  interface Window {
    DISQUS: any;
  }
}
/*DISQUS*/
const VideoPage: React.FC = () => {

  const router = useRouter();
  const { id } = router.query;

  const { MovieGotten } = useMovie();
  console.log("MyID::", id);

  const foundMovie = MovieGotten?.find((movie) => movie.id === id);
  const disqusShortname = 'zclassicmovies';
  const identifier = Array.isArray(id) ? id.join('-') : String(id);
  
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true });
    }
  }, [foundMovie]);
  
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
          <div className={styles.mainFilmBox}>
          <div className={styles.filmBox}>
          <div className={styles.moreContent}>
              <div className={styles.moreHeading}>
              <h3>You Might Also Like:</h3>
              </div>
            <div className={styles.moreImages}>
              <div className={styles.poster1}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Breakfast_at_Tiffany%27s_%281961_poster%29.jpg" alt="Image 1" onClick={() => router.push("/Home")} />
              </div>
              <div className={styles.poster2}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/From_Here_to_Eternity_%281953_poster%29.jpg" alt="Image 2" onClick={() => router.push("/Home")} />
              </div>
              <div className={styles.poster3}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg" alt="Image 3" onClick={() => router.push("/Home")} />
              </div>
            </div>
          </div>
          </div>
            <div className={styles.content}>
            <img className={styles.poster} src={foundMovie.picture} alt={foundMovie.title} width={'300px'} height={'420px'} />
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
          </div>
          {/* Render the Disqus comment section */}
          <DiscussionEmbed
            shortname={disqusShortname}
            config={{
              identifier: identifier,
              title: foundMovie.title,
              url: window.location.href,
            }}
          />
        </div>
      ) : (
        <p>Loading or Movie Not Found</p>
      )}
    </div>
  );
};

export default VideoPage;
