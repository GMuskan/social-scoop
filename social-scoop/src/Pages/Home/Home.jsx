import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet";
import { NavBar } from "../../Components/NavBar/NavBar";
import { NewPost } from "../../Components/NewPost/NewPost";
import { SortBar } from "../../Components/SortBar/SortBar";
import { feedContext } from "../../Context/FeedContext";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { SuggestedUsers } from "../../Components/SuggestedUsers/SuggestedUsers";
import { sortByDate } from "../../utils/utils";
import "./Home.css"

export const Home = () => {
    const { authState } = useContext(authContext);
    const { feedState } = useContext(feedContext);
    const { token } = authState;
    const { isLoading, userFeed, users, activeSort, editPostModal, commentModal, activePost } = feedState;
    const loggedInUser = authState?.user
    const followingUsers = loggedInUser?.following
    var postOfFollowingUsers = userFeed?.filter(post => followingUsers?.some(followingUser => followingUser?.username === post?.username))
    const postsOfUser = userFeed?.filter(post => post?.username === loggedInUser?.username)
    const timelinePosts = [...postOfFollowingUsers, ...postsOfUser]
    const sortedPosts = sortByDate(timelinePosts, activeSort)

    return (
        <>
            {/* <NavBar /> */}

            <div className="home-page-container">
                <Helmet>
                    <title>
                        Home | Social-Scoop
                    </title>
                </Helmet>
                <NavBar />
                <div className="home-page">
                    <div className="home-page-header">
                        <div className="home-page-heading">
                            <h1>Home</h1>
                        </div>
                        <div className="home-page-search-bar">
                            <SearchBar search={feedState?.search} users={users} />
                            {/* <i class="fa fa-search" aria-hidden="true" onClick={() => navigate("/search-users")}></i> */}
                        </div>
                    </div>
                    <NewPost loggedInUser={loggedInUser} token={token} />
                    <SortBar />
                    {isLoading
                        ? <p>Loading...</p>
                        : sortedPosts?.length
                            ? sortedPosts.map(feed => (
                                <PostCard
                                    post={feed}
                                    key={feed?._id}
                                    token={token}
                                    loggedInUser={loggedInUser}
                                    editPostModal={editPostModal}
                                    users={users}
                                    commentModal={commentModal}
                                    activePost={activePost}

                                />
                            ))
                            : <div>No Posts</div>
                    }
                    {/* <div className="suggestion-card">
                        <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                    </div> */}
                </div>
                <div className="suggestion-card">
                    <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                </div>
            </div>
        </>
    )
}