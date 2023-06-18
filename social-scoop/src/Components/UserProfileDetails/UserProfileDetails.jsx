import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FollowModal } from "../FollowModal/FollowModal";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";

export const UserProfileDetails = ({ activeUser, loggedInUser }) => {
    const [followModal, setFollowModal] = useState(false);
    const [followingList, setFollowingList] = useState(false);
    const [followerList, setFollowerList] = useState(false);
    const [editProfile, setEditProfileModal] = useState(false);
    return (
        <div>
            <div>
                <span>
                    <div>
                        <img src={activeUser?.profileAvatar} alt="user-pic" />
                    </div>
                    <div>
                        <div>
                            <h3>{activeUser?.fullName}</h3>
                            <p>{activeUser?.username}</p>
                        </div>
                        <div>
                            <p>{activeUser?.bio}</p>
                            <NavLink to="https://muskanportfolio.netlify.app/">{activeUser?.website}</NavLink>
                        </div>
                        <div>
                            <span>
                                <p onClick={() => {
                                    setFollowerList(false)
                                    setFollowingList(true)
                                    setFollowModal(true)
                                }}>
                                    {activeUser?.following?.length} Following
                                </p>
                                <p onClick={() => {
                                    setFollowingList(false)
                                    setFollowerList(true)
                                    setFollowModal(true)
                                }}>
                                    {activeUser?.followers?.length} Followers
                                </p></span>
                        </div>
                    </div>
                </span>
                {activeUser?.username === loggedInUser?.username && <div>
                    <button onClick={() => setEditProfileModal(true)}>Edit Profile</button>
                    {editProfile && <EditProfileModal setEditProfileModal={setEditProfileModal} loggedInUser={loggedInUser} />}
                </div>}
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