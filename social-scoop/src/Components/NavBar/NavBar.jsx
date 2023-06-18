import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);
    return (
        <aside>
            <div className="action-icons">
                {/* <div>
                    <i className="fa fa-cutlery" aria-hidden="true" onClick={() => navigate("/home")}></i>

                </div> */}
                <div className="action-icon">
                    <i className="fa fa-home" aria-hidden="true" onClick={() => navigate("/home")}></i>

                </div>
                <div className="action-icon">
                    <i className="fa fa-compass" aria-hidden="true" onClick={() => navigate("/explore")}></i>

                </div>
                <div className="action-icon">
                    <i className="fa fa-bookmark" aria-hidden="true" onClick={() => navigate("/bookmarks")}></i>

                </div>
                <div className="action-icon">
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={() => logoutClickHandler(navigate, authState, authDispatch)} />

                </div>

            </div>
            <div >
                <div className="user-icon" onClick={() => {
                    navigate(`/profile/${authState?.user.username}`)
                }}>
                    <div >
                        <img src={authState?.user?.profileAvatar} alt="loggedIn_user_image" />
                    </div>
                    {/* <div>
                        <p>{authState?.user?.fullName}</p>
                        <p>@{authState?.user?.username}</p>
                    </div> */}
                </div>
            </div>

        </aside>
    )
}