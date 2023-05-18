import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useGet } from "restful-react";
import { MovieActionContext, MovieStateContext } from "./context";


const MovieProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const { error, loading, data } = useGet({ 
    path: '/Movie/GetAll'
 });
  const dispatch = (GetMovieRequestAction) => {
    // Define your dispatch logic here
    // For example, update the state based on the action
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MovieStateContext.Provider value={{ error, loading, data }}>
        <MovieActionContext.Provider value={{dispatch}}>
          {children}
        </MovieActionContext.Provider>
    </MovieStateContext.Provider>
  );

  function useMovieState() {
    const context = useContext(MovieStateContext);
    if (!context) {
        throw new Error(`useState must be used within an AuthProvider`)
    }
    return context;
}

function useMovieActionState() {
    const context = useContext(MovieActionContext);
    if (!context) {
        throw new Error(`useMovieActions must be used within an AuthProvider`)
    }
    return context;
}

function useMovies() {
    return {
        ...useMovieState(),
        ...useMovieActionState(),
    }
}

 
};

export default MovieProvider;

