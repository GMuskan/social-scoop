import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import "./NavBar.css";
import { feedContext } from "../../Context/FeedContext";

export const NavBar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);
    const { feedState } = useContext(feedContext)

    const { users } = feedState
    return (
        <aside>
            <div className="action-icons">
                <div className="action-icon">
                    <i className="fa fa-home" aria-hidden="true" onClick={() => navigate("/home")}></i>
                    <div className="icon-name" onClick={() => navigate("/home")}>Home</div>
                </div>
                <div className="action-icon">
                    <i className="fa fa-compass" aria-hidden="true" onClick={() => navigate("/explore")}></i>
                    <div className="icon-name" onClick={() => navigate("/explore")}>Explore</div>
                </div>
                <div className="action-icon">
                    <i className="fa fa-bookmark" aria-hidden="true" onClick={() => navigate("/bookmarks")}></i>
                    <div className="icon-name" onClick={() => navigate("/bookmarks")}>Bookmarks</div>
                </div>
                <div className="action-icon">
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={() => {
                        logoutClickHandler(navigate, authState, authDispatch)
                    }} />
                    <div className="icon-name" onClick={() => {
                        logoutClickHandler(navigate, authState, authDispatch)
                    }}>Logout</div>
                </div>
            </div>
            <div className="user-icon" onClick={() => {navigate(`/profile/${authState?.user.username}`)}}>
                <div>
                    {
                        authState?.user?.profileAvatar
                            ? <img src={authState?.user?.profileAvatar} alt="loggedIn_user_image" />
                            : <img src={users.find(user => user.username === authState?.user?.username).profileAvatar} alt="default-user-icon" />
                    }
                </div>
                <div className="user-icon-details">
                    <div>{authState?.user?.fullName}</div>
                    <div>@{authState?.user?.username}</div>
                </div>
            </div>

        </aside>
    )
}