import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { ILogin, INITIAL_STATE, IUser, USersStateContext, UserContext, UsersActionsContext } from "./context";
import { UserReducer } from "./reducer";
import { CreateUserErrorAction, CreateUserRequestAction, CreateUserSuccessAction, LoginUserRequestAction } from "./actions";
import { useContext } from "react";
import { useMutate } from "restful-react";
import { stat } from "fs";

const UsersProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

//   const {mutate: createUserHttp} = useMutate({
//     path: "/Person/Create",
//     verb: "POST",
//   });

//   useEffect(() =>{
//     if(state.UserCreated){
//         dispatch(CreateUserRequestAction(state.UserCreated))
//     }
//   },[state.UserCreated])

//   const signUpUser = (payload: IUser) =>{
//      dispatch(CreateUserRequestAction(payload));
//      createUserHttp(payload)
//      .then((response) => {
//         createUserHttp({

//         }).then(() => {
//             dispatch(CreateUserSuccessAction(payload));
//         })
       
//       })
//       .catch(({message: errorMessage}) => {
//          dispatch(CreateUserErrorAction(errorMessage));
//          //error message here with antd
//       });
//   };

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
                console.log(data);
                localStorage.setItem('token', data.result.accessToken);
                dispatch(LoginUserRequestAction(data.request))
                if(res.status === 200){
                    console.log(res.status)
                    window.location.href='/'
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

    function useUsersState(){
        const context = useContext(USersStateContext);
        if(!context){
            throw new Error('useUserState must be used within a UsersProvider')
        }
        return context;
    }
    function useUsersAction(){
        const context = useContext(UsersActionsContext);
        if(context === undefined){
            throw new Error('useUserState must be used within a UsersProvider')
        }
        return context;
    }

    function useUsers(){
        return{
            ...useUsersState(),
            ...useUsersAction(),
        }
    };

export {UsersProvider, useUsers }; //!!don't forget to add useUsers!!


