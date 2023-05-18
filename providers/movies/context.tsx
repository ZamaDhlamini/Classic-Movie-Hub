import { createContext } from "react";
import { GetDataError } from "restful-react";

export interface IMovie {
  id?: string;
  title?: string;
  duration?: string;
  description?: string;
  starring?: string;
  genre?: string;
  picture?: string;
  videoUrl?: string;
  loading?: boolean;
  error?: Error | null;
  data?: any | null;

}

export interface IMovieStateContext {
  readonly MovieCreated?: IMovie;
  readonly MovieGotten?: IMovie[];
  readonly loading: true | boolean;
  readonly error: null | GetDataError<any>;
  readonly data: IMovie[];
}

export interface IMovieActionContext {
  getMovie: () => void;
}

export interface IMovieContext extends IMovieStateContext, IMovieActionContext {}

export const INITIAL_STATE: IMovieStateContext = {
  MovieCreated: {},
  MovieGotten: [],
  loading: true,
  error: null,
  data: null
};

const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);
const MovieActionContext = createContext<IMovieActionContext>(undefined);

export { MovieStateContext, MovieActionContext };
