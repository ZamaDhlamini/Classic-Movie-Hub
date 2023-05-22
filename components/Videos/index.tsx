import { useEffect } from "react";
import { useMovie } from "../../providers/movies";


const Video = () => {

    const { getMovies, MovieGotten } = useMovie();
    
      useEffect(() => {
        getMovies();
        console.log('movie is fetched');
      }, []);
    
      
};

export default Video;
