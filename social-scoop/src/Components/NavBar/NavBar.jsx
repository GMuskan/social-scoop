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
                        {authState?.user?.profileAvatar ?
                            <img src={authState?.user?.profileAvatar} alt="loggedIn_user_image" />
                            : <img src={users.find(user => user.username === authState?.user?.username).profileAvatar} alt="default-user-icon" />}
                    </div>
                </div>
            </div>

        </aside>
    )
}