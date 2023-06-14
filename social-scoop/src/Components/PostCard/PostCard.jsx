import { useContext, useState } from "react"
import { addPostComment, deletePost, dislikePost, likePost } from "../../services/postService"
import { getPostDate, postInBookmarks } from "../../utils/utils"
import { feedContext } from "../../Context/FeedContext"
import { EditPostModal } from "../EditPostModal/EditPostModal"
import { addBookmark, removeBookmark, unfollowUser } from "../../services/userService"
import { authContext } from "../../Context/AuthContext"

export const PostCard = ({ post, token, loggedInUser, editPostModal, users, commentModal, activePost }) => {
    const [comment, setComment] = useState("");

    const { authState, authDispatch } = useContext(authContext);
    const handleUnfollowClick = (post) => {
        const userId = users.find(item => item?.username === post?.username)._id
        unfollowUser(userId, token, authDispatch)
    }

    const { feedDispatch } = useContext(feedContext);

    return (
        <div>
            <div>
                <div>
                    <p>{post?.fullName} . <span>{getPostDate(post?.createdAt)}</span></p>
                    <p>{post?.username}</p>
                </div>
                <div>
                    {post?.username === loggedInUser?.username
                        ? <span>
                            <i className="fa fa-pencil" aria-hidden="true" onClick={() => {
                                feedDispatch({ type: "SET_ACTIVE_POST", payload: post?._id })
                                feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: true })
                            }}></i>
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => deletePost(post?._id, token, feedDispatch)}></i>
                        </span>
                        : <button onClick={() => {
                            handleUnfollowClick(post)
                        }}>Unfollow</button>
                    }
                </div>
            </div>
            <div>
                <p>{post?.content}</p>
            </div>
            <div>
                {post?.postImage && <img src={post?.postImage} alt="post" />}
            </div>
            <div>
                <span>
                    <div>
                        <span><i className="fa fa-heart-o" aria-hidden="true"
                            onClick={() => {
                                if (post?.likes?.likedBy.some(user => user?._id === loggedInUser?._id)) {
                                    dislikePost(post?._id, token, feedDispatch)
                                } else {
                                    likePost(post?._id, token, feedDispatch)
                                }
                            }}
                        ></i>{post?.likes?.likeCount}</span>
                    </div>
                    <div>
                        <span><i className="fa fa-comment-o" aria-hidden="true" onClick={() => {
                            feedDispatch({ type: "SET_ACTIVE_POST", payload: post?._id })
                            feedDispatch({ type: "SET_COMMENT_MODAL", payload: true })
                        }}></i>{post?.comments?.length}</span>
                    </div>
                    <div>
                        <i className="fa fa-bookmark-o" style={{ color: postInBookmarks(authState?.bookmarks, post?._id) ? "green" : "red" }} aria-hidden="true"
                            onClick={() => {
                                postInBookmarks(authState?.bookmarks, post?._id)
                                    ? removeBookmark(token, post?._id, authDispatch)
                                    : addBookmark(token, post?._id, authDispatch)
                            }}
                        ></i>
                    </div>
                </span>
            </div>
            {post?._id === activePost && commentModal &&
                <div>
                    <span>
                        <img src={loggedInUser?.profileAvatar} alt="user-avatar" />
                        <input type="text" placeholder="Post your reply" onChange={(e) => setComment(e.target.value)} />
                    </span>
                    <div>
                        <button onClick={() => {
                            feedDispatch({ type: "SET_COMMENT_MODAL", payload: false })
                            feedDispatch({ type: "SET_ACTIVE_POST", payload: "" })
                        }}>Cancel</button>
                        <button onClick={() => {
                            addPostComment(post, { comment }, token, feedDispatch)
                            feedDispatch({ type: "SET_ACTIVE_POST", payload: "" })
                        }}>Reply</button>
                    </div>
                </div>
            }
            {post?._id === activePost && editPostModal && <EditPostModal post={post} loggedInUser={loggedInUser} token={token} />}
        </div>
    )
}