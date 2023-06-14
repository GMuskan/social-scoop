import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
export const NavBar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);
    return (
        <aside>
            <ul>
                <li>
                    <i className="fa fa-cutlery" aria-hidden="true" onClick={() => navigate("/home")}></i>
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" onClick={() => navigate("/home")}></i>
                </li>
                <li>
                    <i className="fa fa-compass" aria-hidden="true" onClick={() => navigate("/explore")}></i>
                </li>
                <li>
                    <i className="fa fa-bookmark" aria-hidden="true" onClick={() => navigate("/bookmarks")}></i>
                </li>
                {/* <li>
                    <i className="fa fa-plus-circle" aria-hidden="true" onClick={() => feeddispatch({ type: "SET_CREATE_POST_MODAL", payload: true })}></i>
                </li> */}
                <li>
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={() => logoutClickHandler(navigate, authState, authDispatch)} />
                </li>
            </ul>
            <ul>
                <div>
                    <div>
                        <img src={authState?.user?.profileAvatar} alt="loggedIn_user_image" />
                    </div>
                    <div>
                        <p>{authState?.user?.fullName}</p>
                        <p>@{authState?.user?.fullName}</p>
                    </div>
                </div>
            </ul>

        </aside>
    )
}