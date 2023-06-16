import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginClickHandler } from "../../../../services/authService";
import { useContext } from "react";
import { authContext } from "../../../../Context/AuthContext";
import { Helmet } from "react-helmet"
import "./Login.css"
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
            <Helmet>
                <title>
                    Login | Social-Scoop
                </title>
            </Helmet>
            <div className="login-form">
                <div className="app-name-section">
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                    <article>Social Scoop</article>
                </div>
                <div className="about-app-section">
                    <span>Social media for Foodies!</span>
                </div>
                <div className="login">
                    <h2>Log In</h2>
                </div>
                <div className="login-credentials">
                    <form
                        autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            LoginClickHandler(login, navigate, authDispatch)
                        }}>
                        <div className="login-username">
                            <label htmlFor="username">Username<span>*</span></label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={login?.input?.username || ""}
                                onChange={loginInputHandler}
                            />
                        </div>
                        <div className="login-password">
                            <label htmlFor="password">Password<span>*</span></label>
                            <span className="login-password-span">
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
                            </span>
                        </div>
                        <div className="login-buttons">
                            <button className="login-btn" type="submit">Login</button>
                            <button className="guest-login-btn" type="submit" onClick={() => setLogin({
                                ...login,
                                input: {
                                    username: "muskan09",
                                    password: "muskan#123"
                                }
                            })}>Guest Mode</button>
                        </div>
                    </form>
                </div>
                <div className="signup-section">
                    <span>Don't have an account?</span>
                    <Link to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}