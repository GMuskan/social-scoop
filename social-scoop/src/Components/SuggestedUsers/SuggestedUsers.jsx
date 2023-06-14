import { useContext } from "react";
import { followUser } from "../../services/userService";
import { authContext } from "../../Context/AuthContext";

export const SuggestedUsers = ({ users, loggedInUser, token }) => {
    const { authDispatch } = useContext(authContext);
    const suggestedUsersList = users?.filter(user => user.username !== loggedInUser?.username)?.filter(eachUser => !loggedInUser?.following?.find(item => item.username === eachUser.username))
    return (
        <div>
            <h1>Suggested Users</h1>
            {suggestedUsersList?.length
                ? suggestedUsersList.map(user => (
                    <div key={user._id}>
                        <img src={user?.profileAvatar} alt="user-iamge" />
                        <div><span>{user?.fullName}</span><span>@{user?.username}</span></div>
                        <button onClick={() => followUser(user?._id, token, authDispatch)}>Follow</button>
                    </div>

                )) : <div></div>}
        </div>
    )
}