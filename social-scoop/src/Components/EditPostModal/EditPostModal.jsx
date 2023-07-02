import { useContext, useState } from "react";
import { feedContext } from "../../Context/FeedContext";
import { editPost } from "../../services/postService";
import "./EditPostModal.css"
export const EditPostModal = ({ post, loggedInUser, token }) => {
    const { feedState, feedDispatch } = useContext(feedContext);
    const [postContent, setPostContent] = useState({ newPostContent: post?.content, newPostImage: post?.postImage })
    const { users } = feedState

    const addNewImageToPost = (e) => {
        setPostContent(prev => ({ ...prev, newPostImage: URL.createObjectURL(e.target.files[0]) }))
    }

    return (
        <div className="edit-post-modal-wrapper">
        <div className="edit-post-modal">
            <div className="edit-post-header">Edit Post</div>
            <div className="edit-post-header-section">
                <div className="edit-post-header-image">
                    {loggedInUser?.profileAvatar ?
                        <img src={loggedInUser?.profileAvatar} alt="loggedIn User icon" />
                        : <img src={users.find(user => user.username === loggedInUser.username).profileAvatar} alt="default=user-icon" />}
                </div>
                <div className="edit-post-header-input">
                    <input
                        type="textbox"
                        contentEditable="true"
                        value={postContent?.newPostContent}
                        onChange={(e) => {
                            setPostContent((prev) => ({ ...prev, newPostContent: e.target.value }))
                        }} />
                </div>
            </div>
            <div className="edit-post-image">
                {postContent?.newPostImage &&
                    <div>
                        <img src={postContent?.newPostImage} alt="post-icon" />
                        <i className="fa fa-times-circle" aria-hidden="true"
                            onClick={() => setPostContent(prev => ({ ...prev, newPostImage: null }))}></i>
                    </div>
                }
            </div>
            <div className="edit-post-footer">
                <div>
                    <label>
                            <input type="file" accept="image/png, image/jpeg" onChange={addNewImageToPost} hidden />
                        <i className="fa fa-picture-o" aria-hidden="true" />
                    </label>
                </div>
                <div className="edit-post-buttons">
                    <button className="btn-cancel" onClick={() => {
                        feedDispatch({ type: "SET_ACTIVE_POST", payload: "" })
                        feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: false })
                    }}>Cancel</button>
                    <button className="btn-save" onClick={() => {
                        editPost(feedDispatch, token, postContent, post?._id)
                        feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: false })
                        feedDispatch({ type: "SET_ACTIVE_POST", payload: "" })
                    }}>Save</button>
                </div>
            </div>
            </div>
        </div>
    )
}