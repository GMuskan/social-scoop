import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { feedContext } from "../../Context/FeedContext";
import { Helmet } from "react-helmet";
import { NavBar } from "../../Components/NavBar/NavBar";
// import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestedUsers } from "../../Components/SuggestedUsers/SuggestedUsers";
import "./Bookmark.css"

export const Bookmark = () => {
    const { authState } = useContext(authContext);
    const { feedState } = useContext(feedContext);
    const { bookmarks, token } = authState;
    const { isLoading, users, userFeed } = feedState;
    const loggedInUser = authState?.user

    const bookmarkedPosts = userFeed.filter((dbPost) =>
        bookmarks?.find((bookmark) => bookmark === dbPost._id)
    );
    return (
        <div>
            <Helmet>
                <title>
                    Bookmarks | Social-Scoop
                </title>
            </Helmet>
            <NavBar />

            <div className="bookmark-container">
                <div className="bookmark-page">
                    <div className="bookmark-header">
                        <div className="bookmark-header-name">
                            <p>Bookmarks</p>
                        </div>
                        {/* <div className="bookmark-search">
                            <SearchBar search={feedState?.search} users={users} />
                        </div> */}
                    </div>

                    <div>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : bookmarkedPosts.length ? (
                            [...bookmarkedPosts]
                                .reverse()
                                .map((bookmarkedPost) => (
                                    <PostCard post={bookmarkedPost} key={bookmarkedPost._id} token={token} users={users} loggedInUser={loggedInUser} />
                                ))
                        ) : (
                            <div>No bookmarks</div>
                        )}
                    </div>
                </div>
                <div className="bookmark-suggestion-card">
                    <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                </div>

            </div>
        </div>
    );
};
