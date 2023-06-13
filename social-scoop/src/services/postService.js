import axios from "axios";

export const getAllPosts = async (feedDispatch) => {
    try {
        feedDispatch({ type: "SET_LOADING", payload: true })
        const { data, status } = await axios.get("/api/posts");
        if (status === 200) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
            feedDispatch({ type: "SET_LOADING", payload: false })
        }
    } catch (err) {
        feedDispatch({ type: "SET_LOADING", payload: true })
        console.error(err)
    }
    
    

}