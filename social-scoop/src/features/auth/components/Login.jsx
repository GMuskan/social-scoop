import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginClickHandler } from "../../../services/authService";
import { useContext } from "react";
import { authContext } from "../../../Context/AuthContext";


export const Login = () => {

    const { authDispatch, navigate } = useContext(authContext);

    const [login, setLogin] = useState({
        input: {},
        hide: true
    })

    const loginInputHandler = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, input: { ...login.input, [name]: value } })
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <div>
                    <h1>social-scoop</h1>
                </div>
                <div>
                    <span>Socail media for Foodies!</span>
                </div>
                <div>
                    <h1>Log In</h1>
                </div>
                <div>
                    <form
                        autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            LoginClickHandler(login, navigate, authDispatch)
                        }}>
                        <div>
                            <label htmlFor="username">Username<span>*</span></label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={login?.input?.username || ""}
                                onChange={loginInputHandler}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password<span>*</span></label>
                            <input
                                type={login?.hide ? "password" : "text"}
                                name="password"
                                id="password"
                                value={login?.input?.password || ""}
                                onChange={loginInputHandler}
                            />
                            <i className={login?.hide ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => setLogin({
                                ...login,
                                hide: !login.hide
                            })}></i>
                        </div>
                        <button type="submit">Login</button>
                        <button type="submit" onClick={() => setLogin({
                            ...login,
                            input: {
                                username: "muskan09",
                                password: "muskan#123"
                            }
                        })}>Guest Mode</button>
                    </form>
                </div>
                <div>
                    <span>Don't have an account?</span>
                    <Link to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}