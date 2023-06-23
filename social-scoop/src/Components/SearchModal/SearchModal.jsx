import { useNavigate } from "react-router";
import "./SearchModal.css"
import { useContext } from "react";
import { feedContext } from "../../Context/FeedContext";
export const SearchModal = ({ searchResult }) => {
    const { feedDispatch } = useContext(feedContext);

    const navigate = useNavigate();

    return (
        <div className="searchModalWrapper">
            <div className="searchModal">
                {searchResult.length
                    ? searchResult.map(user => (
                        <div className="search-user-tag" key={user._id} onClick={() => {
                            navigate(`/profile/${user?.username}`)
                            feedDispatch({ type: "SET_SEARCH_MODAL", payload: false })

                        }}>
                            <img src={user?.profileAvatar} alt="user-iamge" />
                            <div className="search-user-details"><span>{user?.fullName}</span><span>@{user?.username}</span></div>
                        </div>
                    )) : <div>No user found</div>}
            </div>
        </div>
    )
}