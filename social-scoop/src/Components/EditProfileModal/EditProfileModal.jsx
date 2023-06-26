import { useContext, useState } from "react"
import { authContext } from "../../Context/AuthContext"
import { editUserProfile } from "../../services/userService";
import { feedContext } from "../../Context/FeedContext";
import "./EditProfileModal.css"
import { AvatarModal } from "../AvatarModal/AvatarModal";

export const EditProfileModal = ({ setEditProfileModal, loggedInUser }) => {
    const { authState, authDispatch } = useContext(authContext);
    const { feedState, feedDispatch } = useContext(feedContext);
    const { token } = authState
    const { users } = feedState

    const [profileDetails, setProfileDetails] = useState(loggedInUser)

    const [avatarModal, setAvatarModal] = useState(false);

    return (
        <div className="editProfileModalWrapper">
            <div className="editProfileModal">
                <div className="edit-profile-modal-header">
                    <div>
                        <p>Edit Profile</p>
                    </div>
                    <div>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => setEditProfileModal(false)}></i>
                    </div>
                </div>
                <div className="edit-profile-image">
                    {/* <img src={loggedInUser?.profileAvatar} alt="profile-pic" /> */}
                    {loggedInUser?.profileAvatar ?
                        <img src={profileDetails?.profileAvatar} alt="loggedIn User icon" />
                        : <img src={users.find(user => user.username === loggedInUser.username).profileAvatar} alt="default=user-icon" />}
                    <label>
                        <input type="file" onChange={(e) => setProfileDetails({ ...profileDetails, profileAvatar: URL.createObjectURL(e.target.files[0]) })} hidden />
                        <i className="fa fa-camera" aria-hidden="true" />
                    </label>
                    <label className="select-avatar">
                        <button onClick={() => setAvatarModal(true)}>Select Avatar</button>
                    </label>
                    {avatarModal && <AvatarModal setAvatarModal={setAvatarModal} profileDetails={profileDetails} setProfileDetails={setProfileDetails} />}
                </div>
                <div className="edit-profile-details">
                    <div className="edit-profile-details-name">
                        <label>
                            Full Name:
                        </label>
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.fullName}
                            onChange={(e) => setProfileDetails({ ...profileDetails, fullName: e.target.value })}
                        />
                    </div>
                    <div className="edit-profile-details-bio">
                        <label>
                            Bio:
                        </label>
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.bio}
                            onChange={(e) => setProfileDetails({ ...profileDetails, bio: e.target.value })}
                        />
                    </div>
                    <div className="edit-profile-details-website">
                        <label>
                            Website:
                        </label>
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.website}
                            onChange={(e) => setProfileDetails({ ...profileDetails, website: e.target.value })}
                        />
                    </div>
                </div>
                <button onClick={() => {
                    editUserProfile(profileDetails, token, authDispatch, users, feedDispatch)
                    setEditProfileModal(false)
                }}>Save</button>
            </div>
        </div>
    )
}