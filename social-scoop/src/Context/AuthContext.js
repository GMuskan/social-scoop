import { createContext, useReducer } from "react";
import { AuthReducer, authInitialState } from "../Reducers/AuthReducer";
import { useNavigate } from "react-router";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);
    const navigate = useNavigate();
    
    return (
        <authContext.Provider value={{authDispatch, authState, navigate}}>
            {children}
        </authContext.Provider>
    )
}
