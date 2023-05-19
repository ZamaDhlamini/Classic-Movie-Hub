import { IMovie, IMovieStateContext } from "./context";
import { createAction } from "redux-actions";

export enum MovieActionEnum{
    GetMovieRequest = 'Get',
}


export const GetMovieRequestAction = createAction<IMovieStateContext, Array<IMovie>>(MovieActionEnum.GetMovieRequest, (MovieGotten) => ({MovieGotten}));
