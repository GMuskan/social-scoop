import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FollowModal } from "../FollowModal/FollowModal";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import "./UserProfileDetails.css";

export const UserProfileDetails = ({ activeUser, loggedInUser }) => {
    const [followModal, setFollowModal] = useState(false);
    const [followingList, setFollowingList] = useState(false);
    const [followerList, setFollowerList] = useState(false);
    const [editProfile, setEditProfileModal] = useState(false);
    return (
        <div className="user-profile-container">
            <div className="profile-details">
                <img src={activeUser?.profileAvatar} alt="user-pic" />
                <div className="details">
                    <div className="name-details">
                        <h3>{activeUser?.fullName}</h3>
                        <p>{activeUser?.username}</p>
                    </div>
                    <div claaName="bio-details">
                        <p>{activeUser?.bio}</p>
                        <NavLink to="https://muskanportfolio.netlify.app/">{activeUser?.website}</NavLink>
                    </div>
                    <div className="followers-details">
                        <p className="following-count" onClick={() => {
                            setFollowerList(false)
                            setFollowingList(true)
                            setFollowModal(true)
                        }}>
                            {activeUser?.following?.length} Following
                        </p>
                        <p className="followers-count" onClick={() => {
                            setFollowingList(false)
                            setFollowerList(true)
                            setFollowModal(true)
                        }}>
                            {activeUser?.followers?.length} Followers
                        </p>
                    </div>
                </div>
                <div>
                    {activeUser?.username === loggedInUser?.username && <div>
                        <button className="edit-profile-btn" onClick={() => setEditProfileModal(true)}>Edit Profile</button>
                        {editProfile && <EditProfileModal setEditProfileModal={setEditProfileModal} loggedInUser={loggedInUser} />}
                        </div>}
                </div>
            </div>
            {followModal &&
                <FollowModal
                    loggedInUser={activeUser}
                    followingList={followingList}
                    followerList={followerList}
                    setFollowModal={setFollowModal}

                />}
        </div>
    )
}