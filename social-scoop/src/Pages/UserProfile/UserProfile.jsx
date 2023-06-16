import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { feedContext } from "../../Context/FeedContext";
import { Helmet } from "react-helmet";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestedUsers } from "../../Components/SuggestedUsers/SuggestedUsers";
import { UserProfileDetails } from "../../Components/UserProfileDetails/UserProfileDetails";

export const UserProfile = ({ activeUser }) => {
    const { authState } = useContext(authContext);
    const { feedState } = useContext(feedContext);
    const { token } = authState;
    const { isLoading, userFeed, users, editPostModal, commentModal, activePost } = feedState;
    const loggedInUser = authState?.user
    //const loggedInUserPosts = userFeed?.filter(post => post?.username === loggedInUser?.username)

    const activeUserPosts = userFeed?.filter(post => post?.username === activeUser?.username)
    return (
        <div>
            <Helmet>
                <title>
                    Profile | Social-Scoop
                </title>
            </Helmet>
            <NavBar />

            <div>
                <div>
                    <h1>
                        {activeUser?.fullName}
                    </h1>
                    <p>{activeUserPosts?.length} Posts</p>
                </div>
                <UserProfileDetails activeUser={activeUser} loggedInUser={loggedInUser} />

                <div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : activeUserPosts.length ? (
                        [...activeUserPosts]
                            .reverse()
                            .map((feed) =>
                                <PostCard
                                    post={feed}
                                    key={feed._id}
                                    token={token}
                                    loggedInUser={activeUser.username === loggedInUser.username ? activeUser : loggedInUser}
                                    editPostModal={editPostModal}
                                    users={users}
                                    commentModal={commentModal}
                                    activePost={activePost} />
                            )
                    ) : (
                        <div>No Posts</div>
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
