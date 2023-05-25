import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { ILogin, INITIAL_STATE, IUser, USersStateContext, UserContext, UsersActionsContext } from "./context";
import { UserReducer } from "./reducer";
import { CreateUserErrorAction, CreateUserRequestAction, CreateUserSuccessAction, LoginUserRequestAction } from "./actions";
import { useContext } from "react";
import { stat } from "fs";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useMutate } from 'restful-react';
import error from "next/error";


const UsersProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const createUserMutation = useMutate({
    verb: 'POST',
    path: 'Person/Create',
  });

//   const loginMutation = useMutate({
//     verb: 'POST',
//     path: 'https://localhost:44311/api/TokenAuth/Authenticate',
//   });
  
  
  const createUser = async (payload) => {
    try {
      const response = await createUserMutation.mutate(payload);
  
      if (createUserMutation.error) {
        // Handle error case
        console.error('Error occurred during sign up', createUserMutation.error);
      } else {
        // Handle success case
        if (response?.data?.request) {
          dispatch(CreateUserRequestAction(response.data.request));
        }
  
        console.log(response.status);
        window.location.href = '/';
      }
    } catch (error) {
      // Handle error case
      console.error('Error occurred during sign up', error);
    }
  };
  
  
  

  const login = async (payload: ILogin) => {
    try {
      const response = await fetch('https://localhost:44311/api/TokenAuth/Authenticate', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.result.accessToken);
        dispatch(LoginUserRequestAction(data.request));
  
        // Decode the token
        const decodedToken = jwt.decode(data.result.accessToken) as JwtPayload;
        console.log('Decoded Token:', decodedToken);
  
        window.location.href = '/';
      } else {
        // Handle non-200 response status
        console.error('Login request failed with status:', response.status);
      }
    } catch (error) {
      // Handle network or parsing errors
      console.error('Error occurred during login:', error);
    }
  };            
  
  
      
      

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


