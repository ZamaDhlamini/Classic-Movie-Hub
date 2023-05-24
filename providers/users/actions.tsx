import { createAction } from "redux-actions";
import { IUsersStateContext, IUser, ILogin } from "./context";


export enum UsersActionEnums {
    LoginUserRequest = 'LOGIN',
    CreateUserRequest = 'CREATE',
    CreateUserSuccess = 'CREATE_USER_SUCCESS',
    CreateUserError = 'CREATE_USER_ERROR',
    LogoutUser = 'LOGOUT_USER',
}

export const LoginUserRequestAction = createAction<IUsersStateContext, ILogin>(UsersActionEnums.LoginUserRequest, (Login) => ({Login}));
export const CreateUserRequestAction = createAction<IUsersStateContext, IUser>(UsersActionEnums.CreateUserRequest, (UserCreated) => ({UserCreated}));
export const CreateUserSuccessAction = createAction<IUsersStateContext, IUser>(UsersActionEnums.CreateUserRequest, (UserCreated) => ({UserCreated}));
export const CreateUserErrorAction = createAction<IUsersStateContext, string>(UsersActionEnums.CreateUserError, (errorMessage) => ({errorMessage}));
export const LogoutUser = createAction<IUsersStateContext>(UsersActionEnums.LogoutUser, () => ({}));