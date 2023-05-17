import { useGet } from "restful-react";

const MovieRender = () => {
    const { data } = useGet({
        path: 'Movie/GetAll' ,
    });
    if (!data) {
        return <div>Loading...</div>;
    }
    const movies = data.result;
    return (
      <div >
          {movies.map((movie) => (
              <div key={movie.id} >
                  <h1>{movie.title}</h1>
                  <p>Duration: {movie.duration}</p>
                  <p>Starring: {movie.staring}</p>
                  <p>Genre: {movie.category}</p>
              </div>
          ))}
      </div>
    );
}
export default MovieRender;