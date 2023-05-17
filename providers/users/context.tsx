import { createContext } from "react";

export interface ILogin{
    id?: string;
    username?: string;
    password?: string;
    email?:string
}

export interface IUsersStateContext{
    readonly Login?: ILogin;
}

export interface IUsersActionContext{
    login?:(payload: ILogin) => void;

}

export const USersStateContext = createContext<IUsersStateContext>({});
export const UsersActionsContext = createContext<IUsersActionContext | undefined>(undefined);