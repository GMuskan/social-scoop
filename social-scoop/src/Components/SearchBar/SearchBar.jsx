import { useContext } from "react";
import { feedContext } from "../../Context/FeedContext";
import { SearchModal } from "../SearchModal/SearchModal";

export const SearchBar = ({ search, users }) => {
    const { feedState, feedDispatch } = useContext(feedContext);
    const searchResult = search !== "" && users.filter(user => user?.username?.trim().toLowerCase()?.includes(search))
    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    feedDispatch({ type: "SET_SEARCH", payload: e.target.value })
                    feedDispatch({ type: "SET_SEARCH_MODAL", payload: true })
                }
                }
                placeholder="Search Users"
            />
            {searchResult && feedState?.searchModal
                ? <SearchModal searchResult={searchResult} />
                : null
            }
            {/* {searchModal && <SearchModal searchResult={searchResult} />} */}
        </div>

    )
}