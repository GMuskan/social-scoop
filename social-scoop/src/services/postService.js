import axios from "axios";
import toast from "react-hot-toast";

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

export const addPost = async (postContent, newPostImage, loggedInUser, token, feedDispatch) => {
    try {
        const { status, data } = await axios.post("/api/posts",
            {
                postData: { content: postContent, postImage: newPostImage, fullName: loggedInUser?.fullName }
            },
            {
                headers: { authorization: token },
            }
        )
        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
            toast.success("Post Added!")
        }
        feedDispatch({ type: "SET_NEW_POST_CONTENT", payload: "" })
        feedDispatch({ type: "SET_NEW_POST_IMAGE", payload: null })
    } catch (err) {
        console.error(err);
    }
}

export const likePost = async (postId, token, feedDispatch) => {
    try {
        const { data, status } = await axios.post(`/api/posts/like/${postId}`,
            {},
            {
                headers: { authorization: token },
            },
        )

        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
        }
    } catch (err) {
        console.error(err);
    }

}

export const dislikePost = async (postId, token, feedDispatch) => {
    try {
        const {status, data} = await axios.post(
            `/api/posts/dislike/${postId}`,
            {},
            {
                headers: { authorization: token },
            }
        );
        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
        }
    } catch (err) {
        console.error(err)
    }
}

export const deletePost = async (postId, token, feedDispatch) => {
    try {
        const { data, status } = await axios.delete(`/api/posts/${postId}`,
            {
                headers: { authorization: token },
            }
        )
        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
        }
    } catch (err) {
        console.error(err)
    }
}

export const editPost = async (feedDispatch, token, postContent, postId) => {
    try {
        const { status, data } = await axios.post(`/api/posts/edit/${postId}`,
            { postData: { content: postContent } },
            {
                headers: { authorization: token },
            }
        )
        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
        }

    } catch (err) {
        console.error(err)
    }

}

export const addPostComment = async (post, commentData, token, feedDispatch) => {
    try {
        const { data, status } = await axios.post(`/api/comments/add/${post?._id}`,
            { commentData },
            {
                headers: { authorization: token },

            })
        if (status === 201) {
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
            feedDispatch({ type: "SET_COMMENT_MODAL", payload: false })
        }
    } catch (err) {
        console.error(err);
    }
}