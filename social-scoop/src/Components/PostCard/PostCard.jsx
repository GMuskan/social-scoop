export const PostCard = ({ post }) => {
    return (
        <div>
            <div>
                <div>
                    <p>{post?.fullName} . <span>{post?.createdAt}</span></p>
                    <p>{post?.username}</p>
                </div>
                <div>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
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
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                </span>
            </div>
        </div>

    )
}