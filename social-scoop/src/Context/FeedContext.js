import { createContext, useEffect, useReducer, useState } from "react";
import { getAllPosts } from "../services/postService";
import { FeedReducer, feedInitialState } from "../Reducers/FeedReducer";
import { getAllUsers } from "../services/userService";

export const feedContext = createContext();

export const FeedProvider = ({ children }) => {
    const [followingList, setFollowingList] = useState(false);
    const [followerList, setFollowerList] = useState(false);
    const [feedState, feedDispatch] = useReducer(FeedReducer, feedInitialState);

    useEffect(() => {
        getAllPosts(feedDispatch);
        getAllUsers(feedDispatch);
    }, [])
    return (
        <feedContext.Provider value={{ feedState, feedDispatch, followingList, setFollowingList, followerList, setFollowerList }}>
            {children}
        </feedContext.Provider>
    )
}