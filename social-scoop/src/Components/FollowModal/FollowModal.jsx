import { useContext } from "react";
import { useNavigate, useParams } from "react-router"
import { feedContext } from "../../Context/FeedContext";
import "./FollowModal.css"
import { NavBar } from "../NavBar/NavBar";

export const FollowModal = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const { feedState, followerList, followingList } = useContext(feedContext)
    const { users } = feedState
    const following = users?.find(user => user.username === username)?.following
    const followers = users?.find(user => user.username === username)?.followers

    return (
        <div>
            {followingList &&
                <div className="user-following">
                    <div className="following-header">
                        <h2>Following</h2>
                    </div>
                    {following?.length ? following?.map(user => (
                        <div className="following-container">
                            <li key={user?._id}>
                                <div className="following-user-tag" onClick={() => {
                                    navigate(`/profile/${user?.username}`)
                                }}>
                                    <div className="following-user-image">
                                        {user?.profileAvatar ?
                                            <img src={user?.profileAvatar} alt="following-user-pic" />
                                            : <img src={users.find(item => item.username === user?.username).profileAvatar} alt="default-user-icon" />}
                                    </div>
                                    <div className="following-user-details">
                                        <p>{user?.fullName}</p>
                                        <p>@{user?.username}</p>
                                    </div>
                                </div>
                                {/* <div className="following-user-unfollow-btn">
                                <button onClick={() => unfollowUser(user?._id, token, authDispatch, feedState, feedDispatch)}>Unfollow</button>
                            </div> */}
                            </li>
                        </div>
                    )) : <div>No following</div>}
                </div>
            }

            {followerList &&
                <div className="user-followers">
                    <div className="followers-header">
                        <h2>Followers</h2>
                    </div>
                    {followers?.length ? followers?.map(user => (
                        <div className="followers-container">
                            <li key={user?._id}>
                                <div className="followers-user-tag" onClick={() => {
                                    navigate(`/profile/${user?.username}`)
                                }}>
                                    <div className="followers-user-image">
                                        {user?.profileAvatar ? <img src={user?.profileAvatar} alt="follower-user-pic" />
                                            : <img src={users.find(item => item.username === user?.username).profileAvatar} alt="default-user-icon" />}
                                    </div>
                                    <div className="followers-user-details">
                                        <p>{user?.fullName}</p>
                                        <p>{user?.username}</p>
                                    </div>
                                </div>
                                {/* <div className="followers-user-follow-btn">
                                {followers.find(item => item.username === user.username) && !following.find(item => item.username === user.username)
                                    && <button onClick={() => {
                                        followUser(user?._id, token, authDispatch, feedState, feedDispatch)
                                    }}>Follow Back</button>
                                }
                            </div> */}
                            </li>
                        </div>
                    )) : <div>No followers</div>}
                </div>
            }
            <NavBar />

        </div>
    )
}