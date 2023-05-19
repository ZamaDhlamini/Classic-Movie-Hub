import { createContext } from "react";


export interface IUser{
    UserName: string;
    Name: string;
    LastName: string;
    Password: string;
    PhoneNumber: string;
    EmailAddress: string;
}

export interface ILogin{
    id?: string;
    username?: string;
    password?: string;
    email?:string
}

export interface IUsersStateContext{
    readonly UserCreated?: IUser;
    readonly Login?: ILogin;
}

export const  INITIAL_STATE: IUsersStateContext = {}
export interface IUsersActionContext{
    createUser?:(payload:IUser) => void;
    login?:(payload: ILogin) => void;

}

const UserContext = createContext<IUsersStateContext>(INITIAL_STATE);
export const USersStateContext = createContext<IUsersStateContext>({});
export const UsersActionsContext = createContext<IUsersActionContext | undefined>(undefined);

export {UserContext};