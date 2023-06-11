import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { SignUpClickHandler } from "../../../services/authService"
import { authContext } from "../../../Context/AuthContext";


export const SignUp = () => {

    const { authDispatch, navigate } = useContext(authContext);

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
        <div className="signup-container">
            <div className="signup-form">
                <div>
                    <h1>social-scoop</h1>
                </div>
                <div>
                    <span>Socail media for Foodies!</span>
                </div>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <form autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            SignUpClickHandler(signUp, navigate, authDispatch)
                        }}>
                        <div>
                            <label htmlFor="fullName">Full Name<span>*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={signUp?.input?.fullName || ""}
                                onChange={signUpInputHandler}
                            />

                        </div>
                        <div>
                            <label htmlFor="username">Username<span>*</span></label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={signUp?.input?.username || ""}
                                onChange={signUpInputHandler}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password<span>*</span></label>
                            <input
                                type={signUp?.hide?.password ? "password" : "text"}
                                name="password"
                                id="password"
                                value={signUp?.input?.password || ""}
                                onChange={signUpInputHandler}
                            />
                            <i className={signUp?.hide?.password ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => setSignUp({
                                ...signUp,
                                hide: { ...signUp?.hide, password: !signUp.hide?.password }
                            })}></i>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="confirm-password">Confirm Password<span>*</span></label>
                                <input
                                    type={signUp?.hide?.confirmPassword ? "password" : "text"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={signUp?.input?.confirmPassword || ""}
                                    onChange={signUpInputHandler}
                                />
                                <i className={signUp?.hide?.confirmPassword ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => setSignUp({
                                    ...signUp,
                                    hide: { ...signUp?.hide, confirmPassword: !signUp.hide?.confirmPassword }
                                })}></i>
                            </div>
                            {!signUp?.passwordMatch ? (
                                <div>Password do not Match</div>
                            ) : null}
                        </div>
                        <button type="submit" disabled={!signUp?.passwordMatch}>Create Account</button>

                    </form>
                </div>
                <div>
                    <span>Already have an account?</span>
                    <Link to="/">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}