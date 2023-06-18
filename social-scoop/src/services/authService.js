import axios from "axios";
import toast from "react-hot-toast";


export const LoginClickHandler = async (login, navigate, authDispatch) => {
    if (!login.input.username && !login.input.password) {
        toast.error("Please enter username & password");
        navigate("/");
    } else if (!login.input.username) {
        toast.error("Please enter username");
        navigate("/");
    } else if (!login.input.password) {
        toast.error("Please enter password");
        navigate("/");
    } else {
        try {
            const { status, data } = await axios.post("/api/auth/login", login.input);
            if (status === 200) {
                localStorage.setItem("token", data?.encodedToken)
                localStorage.setItem("user", JSON.stringify(data?.foundUser))
                // localStorage.setItem("activeUser", JSON.stringify(data?.foundUser))
                // authDispatch({ type: "SET_ACTIVE_USER", payload: data?.foundUser })
                authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken })
                authDispatch({ type: "SET_USER", payload: data?.foundUser })
                navigate("/home")
                toast.success(
                    `Welcome back, ${data.foundUser.fullName.split(" ")[0]}!`,
                    {
                        icon: "👋",
                    }
                );

            }
        } catch (err) {
            if (err?.response?.status === 404 && login.input.username && login.input.password) {
                toast.error("The username you entered is not Registered")
            } else if (err?.response?.status === 401 && login.input.username && login.input.password) {
                toast.error("The credentials you entered are invalid")
            }

        }
    }

}

export const SignUpClickHandler = async (signUp, navigate, authDispatch) => {
    if (!signUp.input.username && !signUp.input.password && !signUp.input.fullName && !signUp.input.confirmPassword) {
        toast.error("Please enter all details");
        navigate("/signup");
    } else if (!signUp.input.fullName) {
        toast.error("Please enter full name");
        navigate("/signup");
    } else if (!signUp.input.username) {
        toast.error("Please enter username");
        navigate("/signup");
    } else if (!signUp.input.password) {
        toast.error("Please enter password");
        navigate("/signup");
    } else if (!signUp.input.confirmPassword) {
        toast.error("Please confirm your password");
        navigate("/signup");
    } else {
        try {
            const { status, data } = await axios.post("/api/auth/signup", signUp.input);
            if (status === 201) {
                localStorage.setItem("token", data?.encodedToken)
                localStorage.setItem("user", JSON.stringify(data?.createdUser))
                authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken })
                authDispatch({ type: "SET_USER", payload: data?.createdUser })
                navigate("/home");
                toast.success(`Hi, ${data.createdUser.fullName.split(" ")[0]}!`, {
                    icon: "👋",
                });

            }
        } catch (err) {
            if (err?.response?.status === 422 && signUp.input.username && signUp.input.password && signUp.input.fullName && signUp.input.confirmPassword) {
                toast.error("Username Already Exists!")
            }
        }
    }

}

export const logoutClickHandler = (navigate, authState, authDispatch) => {
    const token = authState?.token
    if (token) {
        authDispatch({ type: "SET_USER", payload: JSON.stringify("") });
        authDispatch({ type: "SET_TOKEN", payload: "" });
        // authDispatch({ type: "SET_ACTIVE_USER", payload: JSON.stringify("") });
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("activeUser")
        navigate("/");
        toast.success("Logged Out!")
    } else {
        toast.error("You are already Logged Out.")
    }
}