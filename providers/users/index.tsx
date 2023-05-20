import { FC, PropsWithChildren, useReducer } from "react";
import { ILogin, INITIAL_STATE, IUser, UserContext, UsersActionsContext } from "./context";
import { UserReducer } from "./reducer";
import { CreateUserRequestAction, LoginUserRequestAction } from "./actions";

const UsersProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const createUser = async (payload:IUser) => {
    await fetch('https://localhost:44311/api/services/app/Person/Create', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then(res => {
        res.json().then(data => {
            dispatch(CreateUserRequestAction(data.request))
            if(res.status === 200){
                console.log(res.status)
                window.location.href='/'
            }  
        })
    })
    }

    const login = async (payload: ILogin) => {
        await fetch ('https://localhost:44311/api/TokenAuth/Authenticate', {

        method: 'POST',
        cache: "no-cache",
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        }).then(res => {
            res.json().then(data =>{
                localStorage.setItem('token', data.result.accessToken);
                dispatch(LoginUserRequestAction(data.request))
                if(res.status === 200){
                    console.log(res.status)
                    window.location.href='/MovieTable'
                }
            })
        })
         
    }

    return(
        <UserContext.Provider value={state}>
            <UsersActionsContext.Provider value={{createUser, login}}>
                {children}
            </UsersActionsContext.Provider>
        </UserContext.Provider>
    )
}

