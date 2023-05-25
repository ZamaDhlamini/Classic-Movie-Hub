import { IMovie, IMovieStateContext } from "./context";
import { createAction } from "redux-actions";

export enum MovieActionEnum{
    GetMovieRequest = 'Get',
    SearchMovieRequest = 'SEARCH',
}


export const GetMovieRequestAction = createAction<IMovieStateContext, Array<IMovie>>(MovieActionEnum.GetMovieRequest, (MovieGotten) => ({MovieGotten}));
export const SearchMovieRequestAction = createAction<IMovieStateContext, IMovie[]>(MovieActionEnum.SearchMovieRequest,(searchedMovie) => ({searchedMovie}));
