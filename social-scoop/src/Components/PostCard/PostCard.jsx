import { useContext } from "react"
import { deletePost, likePost } from "../../services/postService"
import { getPostDate } from "../../utils/utils"
import { feedContext } from "../../Context/FeedContext"
import { EditPostModal } from "../EditPostModal/EditPostModal"
import { unfollowUser } from "../../services/userService"
import { authContext } from "../../Context/AuthContext"

export const PostCard = ({ post, token, loggedInUser, editPostModal, users }) => {
    const { authDispatch } = useContext(authContext);
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
                                console.log(editPostModal);
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
                            onClick={() => likePost(post?._id, token, feedDispatch)}
                        ></i>{post?.likes?.likeCount}</span>
                    </div>
                    <div>
                        <span><i className="fa fa-comment-o" aria-hidden="true"></i>{post?.comments?.length}</span>
                    </div>
                    <div>
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                </span>
            </div>
            {post?.username === loggedInUser?.username && editPostModal && <EditPostModal post={post} loggedInUser={loggedInUser} token={token} />}
        </div>
    )
}