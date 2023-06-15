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

        <div>
            <Helmet>
                <title>
                    Home | Social-Scoop
                </title>
            </Helmet>
            <NavBar />
            <div>
                <div>
                    <h1>Home</h1>
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
            </div>
            <div>
                <SearchBar search={feedState?.search} users={users} />
            </div>
            <div>
                <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
            </div>
        </div>
    )
}