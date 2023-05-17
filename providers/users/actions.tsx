import { createAction } from "redux-actions";
import { IUsersStateContext, IUsersActionContext } from "./context";


export enum UsersActionEnums {
    LoginUserRequest = 'LOGIN',
    LogoutUser = 'LOGOUT_USER',
    // CreateUserRequest = "CreateUserRequest"
}

export const LoginUserRequestAction = createAction<IUsersStateContext>(UsersActionEnums.LoginUserRequest, (login) => ({Login}));
export const LogoutUser = createAction<IUsersStateContext>(UsersActionEnums.LogoutUser, () => ({}));