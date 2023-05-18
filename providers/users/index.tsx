import { FC, PropsWithChildren, useReducer } from "react";
import { ILogin } from "./context";
import { UserReducer } from "./reducer";

const USersProvider: FC<PropsWithChildren<any>> = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {});
    const loginUser = (payload: ILogin) => {
        dispatch();
        loginUser(payload)
          .then((res) => {
            dispatch();
          })
          .catch(({ message: Error }) => {
            dispatch();
    
            message.error(Error, 2);
          });
      };
}