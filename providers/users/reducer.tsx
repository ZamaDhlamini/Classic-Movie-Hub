import { UsersActionEnums } from "./actions";
import { IUsersStateContext } from "./context";

export function UserReducer(incomingState: IUsersStateContext, action: ReduxActions.Action<IUsersStateContext>): IUsersStateContext{
    const {type, payload} = action;

    switch (type){
        case UsersActionEnums.CreateUserRequest:
            return {...incomingState, ...payload};

            case UsersActionEnums.LoginUserRequest:
                return{...incomingState}
            default:
                return incomingState;
                case UsersActionEnums.LogoutUser:
                    return{...incomingState}
    }           
               

}