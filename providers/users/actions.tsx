import { createAction } from "redux-actions";
import { IUsersStateContext, IUser, ILogin } from "./context";


export enum UsersActionEnums {
    LoginUserRequest = 'LOGIN',
    CreateUserRequest = 'CREATE',
    LogoutUser = 'LOGOUT_USER',
}

export const LoginUserRequestAction = createAction<IUsersStateContext, ILogin>(UsersActionEnums.LoginUserRequest, (login) => ({Login}));
export const CreateUserRequestAction = createAction<IUsersStateContext, IUser>(UsersActionEnums.CreateUserRequest, (UserCreated) => ({UserCreated}))
export const LogoutUser = createAction<IUsersStateContext>(UsersActionEnums.LogoutUser, () => ({}));