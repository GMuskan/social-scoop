import axios from "axios";
import toast from "react-hot-toast";


export const LoginClickHandler = async (login, navigate, authDispatch) => {

    try {
        const { status, data } = await axios.post("/api/auth/login", login.input);
        if (status === 200) {
            localStorage.setItem("token", data?.encodedToken)
            localStorage.setItem("user", JSON.stringify(data?.foundUser))
            authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken })
            authDispatch({ type: "SET_USER", payload: JSON.stringify(data?.foundUser) })
            navigate("/home")
            toast.success(
                `Welcome back, ${data.foundUser.fullName.split(" ")[0]}!`,
                {
                    icon: "👋",
                }
            );

        }
    } catch (err) {
        if (err?.response?.status === 404) {
            toast.error("The username you entered is not Registered")
        } else if (err?.response?.status === 401) {
            toast.error("The credentials you entered are invalid")
        }

    }

}

export const SignUpClickHandler = async (signUp, navigate, authDispatch) => {

    try {
        const { status, data } = await axios.post("/api/auth/signup", signUp.input);
        if (status === 201) {
            localStorage.setItem("token", data?.encodedToken)
            localStorage.setItem("user", JSON.stringify(data?.createdUser))
            authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken })
            authDispatch({ type: "SET_USER", payload: JSON.stringify(data?.createdUser) })
            navigate("/home");
            toast.success(`Hi, ${data.createdUser.fullName.split(" ")[0]}!`, {
                icon: "👋",
            });

        }
    } catch (err) {
        if (err?.response?.status === 422) {
            toast.error("Username Already Exists!")
        }
    }

}

export const logoutClickHandler = (navigate, authState, authDispatch) => {
    const token = authState?.token
    if (token) {
        authDispatch({ type: "SET_USER", payload: "" });
        authDispatch({ type: "SET_TOKEN", payload: "" });
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/");
        toast.success("Logged Out!")
    } else {
        toast.error("You are already Logged Out.")
    }
}