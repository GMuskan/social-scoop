import { useContext } from "react";
import { followUser } from "../../services/userService";
import { authContext } from "../../Context/AuthContext";
import "./SuggestedUsers.css"
import { feedContext } from "../../Context/FeedContext";
export const SuggestedUsers = ({ users, loggedInUser, token }) => {
    const { authDispatch } = useContext(authContext);
    const { feedState, feedDispatch } = useContext(feedContext);
    const suggestedUsersList = users?.filter(user => user.username !== loggedInUser?.username)?.filter(eachUser => !loggedInUser?.following?.find(item => item.username === eachUser.username))
    return (
        <div className="suggested-user">
            <h1>Suggestions for you</h1>
            <div className="suggested-user-row">
                {suggestedUsersList?.length
                    ? suggestedUsersList.map(user => (
                        <div className="suggested-user-card" key={user._id}>
                            {/* {user?.profileAvatar ? */}
                                <img src={user?.profileAvatar} alt="user-pic" />
                                {/* : <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png" alt="default=user-icon" />} */}
                            <div>{user?.fullName}</div>
                            <div>@{user?.username}</div>
                            <button className="follow-btn" onClick={() => followUser(user?._id, token, authDispatch, feedState, feedDispatch)}>Follow</button>
                        </div>

                    )) : <div></div>}
            </div>
        </div>
    )
}