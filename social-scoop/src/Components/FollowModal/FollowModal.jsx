// import { useContext } from "react";
import { useNavigate } from "react-router"
// import { authContext } from "../../Context/AuthContext";

export const FollowModal = ({ loggedInUser, followingList, followerList, setFollowModal }) => {
    const navigate = useNavigate();
    // const { authDispatch } = useContext(authContext);
    return (
        <div>

            {followingList &&
                <>
                    <span>
                        <h2>Following</h2>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => setFollowModal(false)}></i>
                    </span>
                    {loggedInUser?.following?.map(user => (
                        <li key={user?._id}
                        // onClick={() => navigate(`/profile/${user?.username}`)}
                        >
                            <div>
                                <img src={user?.profileAvatar} alt="following-user-pic" />
                            </div>
                            <div>
                                <p>{user?.fullName}</p>
                                <p>{user?.username}</p>
                            </div>
                        </li>
                    ))}
                </>
            }

            {followerList &&
                <>
                    <span>
                        <h2>Followers</h2>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => setFollowModal(false)}></i>
                    </span>
                    {loggedInUser?.followers?.map(user => (
                        <li key={user?._id} onClick={() => {
                            setFollowModal(false)
                            // localStorage.setItem("activeUser", JSON.stringify(user))
                            // authDispatch({ type: "SET_ACTIVE_USER", payload: user })
                            navigate(`/profile/${user?.username}`)
                        }}>
                            <div>
                                <img src={user?.profileAvatar} alt="follower-user-pic" />
                            </div>
                            <div>
                                <p>{user?.fullName}</p>
                                <p>{user?.username}</p>
                            </div>
                        </li>
                    ))}
                </>
            }
        </div>
    )
}