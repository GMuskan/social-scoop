import { useContext, useState } from "react";
import { feedContext } from "../../Context/FeedContext";
import { editPost } from "../../services/postService";

export const EditPostModal = ({ post, loggedInUser, token }) => {
    const { feedDispatch } = useContext(feedContext);
    const [postContent, setPostContent] = useState(post?.content)

    // const addImageToNewPost = (e) => {
    //     feedDispatch({ type: "SET_NEW_POST_IMAGE", payload: URL.createObjectURL(e.target.files[0]) })
    // }
    return (
        <div>
            <div>Edit Post</div>
            <div>
                <img src={loggedInUser?.profileAvatar} alt="user-profile-icon" />
            </div>
            <input type="textbox" contentEditable="true" value={postContent} onChange={(e) => {
                setPostContent(e.target.value)
            }} />

            <div>
                {/* <i className="fa fa-times-circle" aria-hidden="true"></i> */}
                <img src={post?.postImage} alt="post-icon" />
            </div>
            <div>
                {/* <div>
                    <label>
                        <input type="file" onChange={addImageToNewPost} hidden />
                        <i className="fa fa-picture-o" aria-hidden="true" />
                    </label>
                </div> */}
                <div>
                    <button onClick={() => feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: false })}>Cancel</button>
                    <button onClick={() => {
                        editPost(feedDispatch, token, postContent, post?._id)
                        feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: false })
                    }}>Save</button>
                </div>
            </div>
        </div>
    )
}