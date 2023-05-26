import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { ILogin, INITIAL_STATE, IUser, USersStateContext, UserContext, UsersActionsContext } from "./context";
import { UserReducer } from "./reducer";
import { CreateUserErrorAction, CreateUserRequestAction, CreateUserSuccessAction, LoginUserRequestAction, LogoutUserAction } from "./actions";
import { useContext } from "react";
import { stat } from "fs";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useGet, useMutate } from 'restful-react';
import error from "next/error";
import decodeToken from "../../utils/auth";
import { saveToken } from "../../utils/auth";
import { message } from "antd";


const UsersProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const createUserMutation = useMutate({
    verb: 'POST',
    path: 'Person/Create',
  });

  const { refetch: getPersonById, error: personByIdError, loading: isLoadingPerson, data: person } = useGet({
    path: 'https://localhost:44311/api/services/app/Person/GetByUserId',
  })

  useEffect(() => {
    if(!isLoadingPerson && person?.id){
      console.log('person::', person)
      localStorage.setItem('userDetails', JSON.stringify(person.result))
    }else if(personByIdError){
      console.log('Error person::', personByIdError)
    }
  }, [getPersonById, personByIdError, isLoadingPerson]);
  // const getUserDetails = (id: number) => {
  //   getPersonById({ queryParams: { userId: id } }).then((data) => {
  //       localStorage.setItem('userDetails', JSON.stringify(data.result))
  //       console.log('userD::', data)
  //   })
  // }

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
        saveToken(data.result.accessToken);
        dispatch(LoginUserRequestAction(data.request));
  
        // Decode the token using the decodeToken function from auth.ts
        const decodedToken = decodeToken(data.result.accessToken);
        console.log('Decoded Token:', decodedToken);
  
        window.location.href = '/';
      } else {
        // ...
      }
    } catch (error) {
      // ...
    }
  };    
  
  // const logOutUSer = () => {
  //   dispatch(LogoutUserAction());
  //   window.location.href = '/signIn';
  // };
  
  
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

export {UsersProvider, useUsers}; //!!don't forget to add useUsers!!


