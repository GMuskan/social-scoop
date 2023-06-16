import { useContext, useState } from "react"
import { authContext } from "../../Context/AuthContext"
import { editUserProfile } from "../../services/userService";

export const EditProfileModal = ({ setEditProfileModal, loggedInUser }) => {
    const { authState, authDispatch } = useContext(authContext);
    // const { feedState, feedDispatch } = useContext(feedContext);
    const { token } = authState
    // const {userFeed, users} = feedState

    const [profileDetails, setProfileDetails] = useState(loggedInUser)

    // const changeUserFeeds = (profileDetails) => {
    //     const postsInfoToBeUpdated = userFeed.filter(post => post.username === loggedInUser.username)
    //     console.log(postsInfoToBeUpdated)
    //     const updatedPosts = postsInfoToBeUpdated.map(item => ({ ...item, fullName: loggedInUser.fullName, profile }))
    //     feedDispatch({ type: "SET_FEED", payload: { ...userFeed, postsInfoToBeUpdated } })
    //     // console.log(updatedUser.fullName, updatedUser.bio, updatedUser.website)
    //     // const updatedPosts = postInfoToBeUpdated.map(item => ({ ...item, fullName: updatedUser.fullName }))
    //     // console.log(updatedPosts)
    // }
    return (
        <div>
            <div>
                <i className="fa fa-times" aria-hidden="true" onClick={() => setEditProfileModal(false)}></i>
                <h1>Edit Profile</h1>
                <button onClick={() => {
                    editUserProfile(profileDetails, token, authDispatch)
                    setEditProfileModal(false)
                    // changeUserFeeds(profileDetails)
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