import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { SignUpClickHandler } from "../../../../services/authService"
import { authContext } from "../../../../Context/AuthContext";
import { Helmet } from "react-helmet";
import "./SignUp.css"
import { feedContext } from "../../../../Context/FeedContext";
import signupImg from "../../../../Assests/sign-up-concept.avif"


export const SignUp = () => {

    const { authDispatch, navigate } = useContext(authContext);
    const { feedDispatch, feedState } = useContext(feedContext)

    const [signUp, setSignUp] = useState({
        input: {},
        passwordMatch: true,
        hide: { password: true, confirmPassword: true }
    })

    const signUpInputHandler = (e) => {
        const { name, value } = e.target;
        if (name === "confirmPassword") {
            setSignUp({
                ...signUp,
                input: { ...signUp.input, [name]: value },
                passwordMatch: value === signUp?.input?.password ? true : false
            })
        } else {
            setSignUp({ ...signUp, input: { ...signUp.input, [name]: value } })
        }
    }
    return (
        <div className="signup-page">
            <div className="signup-image">
                <img src={signupImg} alt="signup-icon" />
            </div>
            <div className="signup-container">
                <Helmet>
                    <title>
                        SignUp | Social-Scoop
                    </title>
                </Helmet>
                <div className="signup-form">
                    <div className="app-name-section">
                        {/* <i className="fa fa-cutlery" aria-hidden="true"></i> */}
                        <article>Social Scoop</article>
                    </div>
                    {/* <div className="about-app-section">
                        <span>Social media for Foodies!</span>
                    </div> */}
                    <div className="signup">
                        <h3>Signup</h3>
                    </div>
                    <div className="signup-credentials">
                        <form autoComplete="off"
                            onSubmit={(e) => {
                                e.preventDefault();
                                SignUpClickHandler(signUp, navigate, authDispatch, feedDispatch, feedState)
                            }}>
                            <div className="signup-fullName">
                                <label htmlFor="fullName">Full Name<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={signUp?.input?.fullName || ""}
                                    onChange={signUpInputHandler}
                                />
                            </div>
                            <div className="signup-username">
                                <label htmlFor="username">Username<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={signUp?.input?.username || ""}
                                    onChange={signUpInputHandler}
                                />
                            </div>
                            <div className="signup-password">
                                <label htmlFor="password">Password<span style={{ color: "red" }}>*</span></label>
                                
                                    <input
                                        type={signUp?.hide?.password ? "password" : "text"}
                                        name="password"
                                        id="password"
                                        value={signUp?.input?.password || ""}
                                        onChange={signUpInputHandler}
                                />
                                <span className="signup-password-span">
                                    <i className={signUp?.hide?.password ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => setSignUp({
                                        ...signUp,
                                        hide: { ...signUp?.hide, password: !signUp.hide?.password }
                                    })}></i>
                                </span>
                            </div>
                            <div className="confirm-password">
                                <div className="signup-confirmPassword">
                                    <label htmlFor="confirm-password">Confirm Password<span style={{ color: "red" }}>*</span></label>
                                    
                                        <input
                                            type={signUp?.hide?.confirmPassword ? "password" : "text"}
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            value={signUp?.input?.confirmPassword || ""}
                                            onChange={signUpInputHandler}
                                    />
                                    <span className="signup-confirmPassword-span">
                                        <i className={signUp?.hide?.confirmPassword ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => setSignUp({
                                            ...signUp,
                                            hide: { ...signUp?.hide, confirmPassword: !signUp.hide?.confirmPassword }
                                        })}></i>
                                    </span>
                                </div>
                                {!signUp?.passwordMatch ? (
                                    <div className="pwd-not-matching">Password do not Match</div>
                                ) : null}
                            </div>
                            <div>
                                <button className="signup-btn" type="submit" disabled={!signUp?.passwordMatch}>Create Account</button>
                            </div>
                        </form>
                    </div>
                    <div className="login-section">
                        <span>Already have an account?</span>
                        <Link className="login-link" to="/">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}