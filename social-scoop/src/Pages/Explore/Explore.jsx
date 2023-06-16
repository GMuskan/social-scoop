import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { feedContext } from "../../Context/FeedContext";
import { Helmet } from "react-helmet";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestedUsers } from "../../Components/SuggestedUsers/SuggestedUsers";

export const Explore = () => {
    const { authState } = useContext(authContext);
    const { feedState } = useContext(feedContext);
    const { token } = authState;
    const { isLoading, userFeed, users, editPostModal, commentModal, activePost } = feedState;
    const loggedInUser = authState?.user


    return (
        <div>
            <Helmet>
                <title>
                    Explore | Social-Scoop
                </title>
            </Helmet>
            <NavBar />

            <div>
                <div>
                    <h1>
                        Explore
                    </h1>
                </div>

                <div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : userFeed.length ? (
                        [...userFeed]
                            .reverse()
                            .map((feed) => (feed?.username !== loggedInUser?.username &&
                                <PostCard
                                    post={feed}
                                    key={feed._id}
                                    token={token}
                                    loggedInUser={loggedInUser}
                                    editPostModal={editPostModal}
                                    users={users}
                                    commentModal={commentModal}
                                    activePost={activePost} />
                            ))
                    ) : (
                        <div>No bookmarks</div>
                    )}
                </div>
            </div>

            <div>
                <div>
                    <SearchBar search={feedState?.search} users={users} />
                </div>
                <div>
                    <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                </div>
            </div>
        </div>
    );
};
