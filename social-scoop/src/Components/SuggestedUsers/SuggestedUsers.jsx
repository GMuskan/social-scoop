import { useContext } from "react";
import { followUser } from "../../services/userService";
import { authContext } from "../../Context/AuthContext";
import "./SuggestedUsers.css"
import { feedContext } from "../../Context/FeedContext";
import { useNavigate } from "react-router";
export const SuggestedUsers = ({ users, loggedInUser, token }) => {
    const navigate = useNavigate();

    const { authDispatch } = useContext(authContext);
    const { feedState, feedDispatch } = useContext(feedContext);
    const suggestedUsersList = users?.filter(user => user.username !== loggedInUser?.username)?.filter(eachUser => !loggedInUser?.following?.find(item => item.username === eachUser.username))
    return (
        <div className="suggested-user">
            {suggestedUsersList?.length
                ? <div>
                    <h1>Suggestions for you
                    </h1>
                </div>
                : <div></div>
            }
            <div className="suggested-user-row">
                {suggestedUsersList?.length
                    ? suggestedUsersList.map(user => (
                        <div className="suggested-user-card" key={user?._id}>
                            <div onClick={() => navigate(`/profile/${user?.username}`)}>
                                <img src={user?.profileAvatar} alt="user-pic" />
                                <div>{user?.fullName}</div>
                                <div className="suggested-username">@{user?.username}</div>
                            </div>
                            <button className="follow-btn" onClick={() => followUser(user?._id, token, authDispatch, feedState, feedDispatch)}>Follow</button>
                        </div>

                    )) : <div></div>}
            </div>
        </div>
    )
}