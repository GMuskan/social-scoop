import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { feedContext } from "../../Context/FeedContext";
import { Helmet } from "react-helmet";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestedUsers } from "../../Components/SuggestedUsers/SuggestedUsers";
import InfiniteScroll from "react-infinite-scroll-component";

import "./Explore.css"
export const Explore = () => {
    const { authState } = useContext(authContext);
    const { feedState, feedDispatch } = useContext(feedContext);
    const { token } = authState;
    const { isLoading, userFeed, infiniteFeed, users, editPostModal, commentModal, activePost } = feedState;
    const loggedInUser = authState?.user

    const fetchMoreData = () => {
        setTimeout(() => {
            feedDispatch({ type: "SET_INFINITE_FEED", payload: infiniteFeed.concat(infiniteFeed) })
        }, 1500);
    };


    return (
        <div>
            <Helmet>
                <title>
                    Explore | Social-Scoop
                </title>
            </Helmet>
            <NavBar />

            <div className="explore-container">
                <div className="explore-page">
                    <div className="explore-header">
                        <div className="explore-header-name">
                            <h1>Explore</h1>
                        </div>
                        <div className="explore-search">
                            <SearchBar search={feedState?.search} users={users} />
                        </div>
                    </div>

                    <div>
                        {isLoading && (
                            <p>Loading...</p>
                        )}
                        <InfiniteScroll
                            dataLength={infiniteFeed.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
                            {infiniteFeed.length && (
                                [...infiniteFeed]
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
                            )}
                        </InfiniteScroll>
                    </div>
                </div>
                <div className="explore-suggestion-card">
                    <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                </div>
            </div>

            {/* <div>
                
                <div>
                    <SuggestedUsers users={users} loggedInUser={loggedInUser} token={token} />
                </div>
            </div> */}
        </div>
    );
};
