import { useContext } from "react";
import { feedContext } from "../../Context/FeedContext";
import { addPost } from "../../services/postService";
import "./NewPost.css"

export const NewPost = ({ loggedInUser, token, post }) => {
    const { feedDispatch, feedState } = useContext(feedContext);
    const addImageToNewPost = (e) => {
        feedDispatch({ type: "SET_NEW_POST_IMAGE", payload: URL.createObjectURL(e.target.files[0]) })
    }
    return (
        <div className="newPost">
            <div className="userProfile">
                <div className="new-post-input">
                    {loggedInUser?.profileAvatar ? <img src={loggedInUser?.profileAvatar} alt="loggedIn User icon" /> : <i className="fa fa-user-circle-o" aria-hidden="true"></i>}
                    <input className="new-post-text" type="text" placeholder="What's happening?" value={feedState?.newPostContent} onChange={(e) => feedDispatch({ type: "SET_NEW_POST_CONTENT", payload: e.target.value })} />
                </div> 
            </div>
            <div className="add-new-post-btn">
                <div className="new-post-file-input">
                    <label className="new-post-file-input-label">
                        <input type="file" onChange={addImageToNewPost} hidden />
                        <i className="fa fa-picture-o" aria-hidden="true" />
                    </label>
                </div>
                <button onClick={() => {
                    addPost(feedState?.newPostContent, feedState?.newPostImage, loggedInUser, token, feedDispatch);
                }
                }>Post</button>
            </div>
        </div>
    )
}