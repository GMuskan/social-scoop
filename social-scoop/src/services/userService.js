import axios from "axios";

export const getAllUsers = async (feedDispatch) => {
    try {
        const response = await axios.get("/api/users")
        feedDispatch({ type: "SET_USERS", payload: response?.data?.users })

    } catch (err) {
        console.error(err);
    }
}