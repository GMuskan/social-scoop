import { createContext, useEffect, useReducer } from "react";
import { getAllPosts } from "../services/postService";
import { FeedReducer, feedInitialState } from "../Reducers/FeedReducer";
import { getAllUsers } from "../services/userService";

export const feedContext = createContext();

export const FeedProvider = ({children}) => {
    const [feedState, feedDispatch] = useReducer(FeedReducer, feedInitialState);
    useEffect(() => {
        getAllPosts(feedDispatch);
        getAllUsers(feedDispatch);
    },[])
    return (
        <feedContext.Provider value={{ feedState, feedDispatch }}>
            {children}
        </feedContext.Provider>
    )
}