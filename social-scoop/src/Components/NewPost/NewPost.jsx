

export const NewPost = ({ loggedInUser }) => {
    return (
        <div>
            <div>
                {loggedInUser?.profileAvatar ? <img src={loggedInUser?.profileAvatar} alt="loggedIn User icon" /> : <i className="fa fa-user-circle-o" aria-hidden="true"></i>}
                <p>What's happening</p>
            </div>
            <div>
                <i className="fa fa-picture-o" aria-hidden="true"></i>
                <button>Post</button>
            </div>
        </div>
    )
}