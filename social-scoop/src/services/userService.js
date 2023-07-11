import axios from "axios";
import { toast } from "react-hot-toast";

export const getAllUsers = async (feedDispatch) => {
    try {
        const response = await axios.get("/api/users")
        feedDispatch({ type: "SET_USERS", payload: response?.data?.users })

    } catch (err) {
        console.error(err);
    }
}

export const followUser = async (userId, token, authDispatch, feedState, feedDispatch) => {
    try {
        const { status, data } = await axios.post(`/api/users/follow/${userId}`,
            {},
            { headers: { authorization: token } }
        )
        if (status === 200) {
            const currUser = JSON.parse(localStorage.getItem("user")).username
            const currUserImage = feedState?.users.find(user => user.username === currUser).profileAvatar
            localStorage.setItem("user", JSON.stringify({ ...data?.user, profileAvatar: currUserImage }))
            authDispatch({ type: "SET_USER", payload: { ...data?.user, profileAvatar: currUserImage } })
            const updatedUsers = feedState?.users.map(user => {

                if (user.username === data?.user.username) {
                    return { ...data?.user, profileAvatar: currUserImage }
                } else if (user.username === data?.followUser.username) {
                    return { ...user, followers: [...user.followers, data?.user] }
                }
                else
                    return user
            })
            feedDispatch({ type: "SET_USERS", payload: updatedUsers })
            toast.success(`You started following ${data?.followUser?.fullName}`)
        }
    } catch (err) {
        console.error(err)
    }
}

export const unfollowUser = async (userId, token, authDispatch, feedState, feedDispatch) => {
    try {
        const { data, status } = await axios.post(`/api/users/unfollow/${userId}`,
            {},
            { headers: { authorization: token } }
        );
        if (status === 200) {
            const currUser = JSON.parse(localStorage.getItem("user")).username
            const currUserImage = feedState?.users?.find(user => user.username === currUser).profileAvatar
            localStorage.setItem("user", JSON.stringify({ ...data?.user, profileAvatar: currUserImage }))
            authDispatch({ type: "SET_USER", payload: { ...data?.user, profileAvatar: currUserImage } })
            const updatedUsers = feedState?.users?.map(user => {

                if (user.username === data?.user.username) {
                    return { ...data?.user, profileAvatar: currUserImage }
                } else if (user.username === data?.followUser.username) {
                    return { ...user, followers: data?.followUser?.followers }
                }
                else
                    return user
            })
            feedDispatch({ type: "SET_USERS", payload: updatedUsers })
            toast.error(`You unfollowed ${data?.followUser?.fullName}`)
        }
    } catch (err) {
        console.error(err)
    }
}

export const addBookmark = async (token, postId, authDispatch) => {
    try {
        const { status, data } = await axios.post(
            `/api/users/bookmark/${postId}`,
            {},
            { headers: { authorization: token } }
        );
        if (status === 200) {
            authDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks })
            toast.success("Added to Bookmarks")
        }
    } catch (err) {
        console.error(err)
    }
}

export const removeBookmark = async (token, postId, authDispatch) => {
    try {
        const { status, data } = await axios.post(
            `/api/users/remove-bookmark/${postId}`,
            {},
            { headers: { authorization: token } }
        );
        if (status === 200) {
            authDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks })
            toast.success("Removed from Bookmarks")
        }
    } catch (err) {
        console.error(err)
    }

}

export const editUserProfile = async (profileDetails, token, authDispatch, users, feedDispatch) => {
    try {
        const { status, data } = await axios.post("/api/users/edit",
            { userData: profileDetails },
            { headers: { authorization: token } }
        );
        if (status === 201) {
            toast.success("Profile Updated")
            localStorage.setItem("user", JSON.stringify(data?.user))
            authDispatch({ type: "SET_USER", payload: data?.user })
            const newUsers = users.map(user => {
                if (user.username === data?.user?.username) {
                    return data?.user
                }
                return user;
            })
            feedDispatch({ type: "SET_USERS", payload: newUsers })
            feedDispatch({ type: "SET_FEED", payload: data?.posts })
            feedDispatch({ type: "SET_INFINITE_FEED", payload: data?.posts })
        }

    } catch (err) {
        console.error(err)
    }
}