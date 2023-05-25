import { useGet } from "restful-react";
import { useMovie } from "../../providers/movies";
import { useEffect, useState } from "react";
import { Spin, message } from "antd";

const MovieFavoriteList: React.FC<any> = () => {

  const { getMovies, MovieGotten } = useMovie();
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  const [list, setList] = useState([]);

  const { data, loading, error } = useGet({
    path: `https://localhost:44311/api/services/app/MovieListAbpApp/GetAllByUserId?personId=${userDetails.id}`,
  });

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch list:', error);
    }
  }, [error]);
  if (loading) {
    return (
      <Spin spinning={!MovieGotten?.length} tip={'Loading Movies .......'}></Spin>
    );
  }

  localStorage.setItem('movieListData', JSON.stringify(data));
  const movieIds = data?.result.map((movieId) => movieId.movieId);
  console.log('MOVIES IDS', movieIds);
  console.log(data)
  const myListMovies = MovieGotten.filter((movie) => movieIds?.includes(movie.id));
  console.log('myListMovies IDS', myListMovies);
  const handleDeleteButton = (itemId) => {
    // Remove the movie from the watchlist
    const updatedList = myListMovies.filter(item => item.id !== itemId);
    // Update the state with the updated watchlist
    setList(updatedList);
    // Display a success message
    message.success('Movie removed from watchlist');
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {myListMovies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.picture} alt={movie.title} />
          <button onClick={() => handleDeleteButton(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default MovieFavoriteList;