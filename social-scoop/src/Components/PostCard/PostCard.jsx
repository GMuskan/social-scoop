import { useContext, useState } from "react"
import { addPostComment, deletePost, dislikePost, likePost } from "../../services/postService"
import { getPostDate, postInBookmarks } from "../../utils/utils"
import { feedContext } from "../../Context/FeedContext"
import { EditPostModal } from "../EditPostModal/EditPostModal"
import { addBookmark, followUser, removeBookmark, unfollowUser } from "../../services/userService"
import { authContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router"
import "./PostCard.css"

export const PostCard = ({ post, token, loggedInUser, editPostModal, users, commentModal, activePost }) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    const { authState, authDispatch } = useContext(authContext);
    const handleUnfollowClick = (post) => {
        const userId = users.find(item => item?.username === post?.username)._id
        unfollowUser(userId, token, authDispatch)
    }

    const handleFollowClick = (post) => {
        const userId = users.find(item => item?.username === post?.username)._id
        followUser(userId, token, authDispatch)
    }

    const { feedDispatch } = useContext(feedContext);

    const profilePicture = users.find(user => user.username === post.username)?.profileAvatar

    // const activeUser = users.find(user => user.username === post.username)

    const [likeColor, setLikeColor] = useState("grey");
    const [bookmarkColor, setBookmarkColor] = useState("grey")

    return (
        <div className="postcard">
            <div className="postcard-header">
                <div className="postcard-header-image">
                    <img src={profilePicture} alt="profile-pic" />
                </div>
                <div className="postcard-header-title" onClick={() => {
                    // localStorage.setItem("activeUser", JSON.stringify(activeUser))
                    // authDispatch({ type: "SET_ACTIVE_USER", payload: activeUser })
                    navigate(`/profile/${post?.username}`)
                }}>
                    <p>{post?.fullName} . <span>{getPostDate(post?.createdAt)}</span></p>
                    <p>@{post?.username}</p>
                </div>
                <div className="postcard-header-button-section">
                    {post?.username === loggedInUser?.username
                        ? <span>
                            <i className="fa fa-pencil" aria-hidden="true" onClick={() => {
                                feedDispatch({ type: "SET_ACTIVE_POST", payload: post?._id })
                                feedDispatch({ type: "SET_EDIT_POST_MODAL", payload: true })
                            }}></i>
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => deletePost(post?._id, token, feedDispatch)}></i>
                        </span>
                        : loggedInUser?.following?.find(item => item.username === post.username) ?
                            <button className="follow-unfollow-button" onClick={() => {
                                handleUnfollowClick(post)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                handleFollowClick(post)
                            }}>Follow</button>
                    }
                </div>
            </div>
            <div className="post-content">
                <p>{post?.content}</p>
            </div>
            <div className="post-image">
                {post?.postImage && <img src={post?.postImage} alt="post" />}
            </div>
            <div className="post-action-buttons">
                <div className="post-card-like-button">
                    <span><i className="fa fa-heart" style={{ color: post?.likes?.likedBy.some(user => user?._id === loggedInUser?._id) ? "red" : likeColor }} aria-hidden="true"
                        onClick={() => {
                            if (post?.likes?.likedBy.some(user => user?._id === loggedInUser?._id)) {
                                dislikePost(post?._id, token, feedDispatch)
                                setLikeColor("grey");

                            } else {
                                likePost(post?._id, token, feedDispatch)
                                setLikeColor("red");
                            }
                        }}
                    ></i>{post?.likes?.likeCount}</span>
                </div>
                <div className="post-card-comment-button">
                    <span><i className="fa fa-comment-o" aria-hidden="true" onClick={() => {
                        feedDispatch({ type: "SET_ACTIVE_POST", payload: post?._id })
                        feedDispatch({ type: "SET_COMMENT_MODAL", payload: true })
                    }}></i>{post?.comments?.length}</span>
                </div>
                <div className="post-card-bookmark-button">
                    <i className="fa fa-bookmark" style={{ color: postInBookmarks(authState?.bookmarks, post?._id) ? "limeGreen" : bookmarkColor }} aria-hidden="true"
                        onClick={() => {
                            if (postInBookmarks(authState?.bookmarks, post?._id)) {
                                removeBookmark(token, post?._id, authDispatch)
                                setBookmarkColor("grey")
                            } else {
                                addBookmark(token, post?._id, authDispatch)
                                setBookmarkColor("limeGreen")
                            }
                        }}
                    ></i>
                </div>
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