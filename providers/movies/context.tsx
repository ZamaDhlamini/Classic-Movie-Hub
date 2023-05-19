import { createContext } from "react";

export interface IMovie {
    id?: string,
    title: string,
    duration: string,
    starring: string,
    genreName: string,
    picture?: string,
    videoUrl?: string,
    description?: string,
    year?: string,

    // film?: string,
}

export const INITIAL_STATE: IMovieStateContext={
  MovieGotten:[],
}

export interface IMovieStateContext {
    readonly MovieGotten?:Array<IMovie>;
    readonly searchedMovie?:IMovie[];
    readonly filteredMovie?:IMovie;
    readonly countedMovie?:number;
}

export interface IMovieActionContext{
    getMovies?:() => void;
    // searchMovie?:(payload:string) => void;
    // filterMovie?:(payload:string) => void;
    // countMovies?:() => void;
}

const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);

const MovieActionContext = createContext<IMovieActionContext>(undefined);

export {MovieStateContext, MovieActionContext};