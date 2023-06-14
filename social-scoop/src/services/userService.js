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

export const followUser = async (userId, token, authDispatch) => {
    try {
        const { status, data } = await axios.post(`/api/users/follow/${userId}`,
            {},
            { headers: { authorization: token } }
        )
        if (status === 200) {
            toast.success(`You started following ${data?.followUser?.fullName}`)
            localStorage.setItem("user", JSON.stringify(data?.user))
            authDispatch({ type: "SET_USER", payload: JSON.stringify(data?.user) })
        }
    } catch (err) {
        console.error(err)
    }
}

export const unfollowUser = async (userId, token, authDispatch) => {
    try {
        const { data, status } = await axios.post(`/api/users/unfollow/${userId}`,
            {},
            { headers: { authorization: token } }
        );
        if (status === 200) {
            toast.error(`You unfollowed ${data?.followUser?.fullName}`)
            localStorage.setItem("user", JSON.stringify(data?.user))
            authDispatch({ type: "SET_USER", payload: JSON.stringify(data?.user) })
        }
    } catch (err) {
        console.error(err)
    }
}