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

export const Home = () => {
    const { authState } = useContext(authContext);
    const { feedState } = useContext(feedContext);
    const { isLoading, userFeed, users } = feedState;
    const loggedInUser = users.find(user => user?.username === authState?.user?.username)
    const followingUsers = loggedInUser?.following
    var postOfFollowingUsers = userFeed?.filter(post => followingUsers?.some(followingUser => followingUser?.username === post?.username))
    const postsOfUser = userFeed?.filter(post => post?.username === loggedInUser?.username)
    const timelinePosts = [...postOfFollowingUsers, ...postsOfUser]

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
                <NewPost loggedInUser={loggedInUser} />
                <SortBar />
                {isLoading
                    ? <p>Loading...</p>
                    : timelinePosts?.length
                        ? timelinePosts.map(feed => (
                            <PostCard post={feed} key={feed?._id} />
                        ))
                        : <div>No Posts</div>
                }
            </div>
            <div>
                <SearchBar search={feedState?.search} users={users} />
            </div>
            <div>
                <SuggestedUsers users={users} loggedInUser={loggedInUser} />
            </div>
        </div>
    )
}