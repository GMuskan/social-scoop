import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import "./UserProfileDetails.css";
import { feedContext } from "../../Context/FeedContext";

export const UserProfileDetails = ({ activeUser, loggedInUser }) => {
    const { setFollowingList, setFollowerList } = useContext(feedContext)
    const [editProfile, setEditProfileModal] = useState(false);

    const navigate = useNavigate();
    return (
        <div>
            <div className="user-profile-container">
                <div className="profile-details">
                    <div className="details">
                        <img src={activeUser?.profileAvatar} alt="user-pic" />
                        <div className="name-details">
                            <h3>{activeUser?.fullName}</h3>
                            <p>{activeUser?.username}</p>
                        </div>
                        <div className="bio-details">
                            <p>{activeUser?.bio}</p>
                            <NavLink className="bio-link" to="https://muskanportfolio.netlify.app/" target="_blank" rel="noreferrer">{activeUser?.website}</NavLink>
                        </div>
                        <div className="followers-details">
                            <p className="following-count" onClick={() => {
                                setFollowerList(false)
                                setFollowingList(true)
                                navigate(`/profile/${activeUser?.username}/following`)
                            }}>
                                {activeUser?.following?.length} Following
                            </p>
                            <p className="followers-count" onClick={() => {
                                setFollowingList(false)
                                setFollowerList(true)
                                navigate(`/profile/${activeUser?.username}/followers`)
                            }}>
                                {activeUser?.followers?.length} Followers
                            </p>
                        </div>
                    </div>
                    <div>
                        {activeUser?.username === loggedInUser?.username
                            && <div>
                                <button className="edit-profile-btn" onClick={() => {
                                    setEditProfileModal(true)
                                }}>Edit Profile</button>
                                {editProfile && <EditProfileModal setEditProfileModal={setEditProfileModal} loggedInUser={loggedInUser} />}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}