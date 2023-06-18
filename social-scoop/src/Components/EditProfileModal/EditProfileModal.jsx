import { useContext, useState } from "react"
import { authContext } from "../../Context/AuthContext"
import { editUserProfile } from "../../services/userService";
import { feedContext } from "../../Context/FeedContext";

export const EditProfileModal = ({ setEditProfileModal, loggedInUser }) => {
    const { authState, authDispatch } = useContext(authContext);
    const { feedState, feedDispatch } = useContext(feedContext);
    const { token } = authState
    const { users } = feedState

    const [profileDetails, setProfileDetails] = useState(loggedInUser)

    return (
        <div>
            <div>
                <i className="fa fa-times" aria-hidden="true" onClick={() => setEditProfileModal(false)}></i>
                <h1>Edit Profile</h1>
                <button onClick={() => {
                    editUserProfile(profileDetails, token, authDispatch, users, feedDispatch)
                    setEditProfileModal(false)
                }}>Save</button>
            </div>
            <div>
                <img src={loggedInUser?.profileAvatar} alt="profile-pic" />
                <label>
                    <input type="file" onChange={(e) => setProfileDetails({ ...profileDetails, profileAvatar: URL.createObjectURL(e.target.files[0]) })} hidden />
                    <i className="fa fa-camera" aria-hidden="true" />
                </label>
            </div>
            <div>
                <div>
                    <label>
                        Full Name:
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.fullName}
                            onChange={(e) => setProfileDetails({ ...profileDetails, fullName: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Bio:
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.bio}
                            onChange={(e) => setProfileDetails({ ...profileDetails, bio: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Website:
                        <input
                            type="textbox"
                            contentEditable="true"
                            value={profileDetails?.website}
                            onChange={(e) => setProfileDetails({ ...profileDetails, website: e.target.value })}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}