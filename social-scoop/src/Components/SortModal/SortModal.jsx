import { useContext } from "react";
import { feedContext } from "../../Context/FeedContext";

export const SortModal = () => {
    const { feedDispatch } = useContext(feedContext);

    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => feedDispatch({type: "SET_ACTIVE_SORT", payload: "Trending"})}>
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        Trending
                    </button>

                </li>
                <li>
                    <button onClick={() => feedDispatch({ type: "SET_ACTIVE_SORT", payload: "Oldest" })}>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                        Oldest
                    </button>
                </li>
                <li>
                    <button onClick={() => feedDispatch({ type: "SET_ACTIVE_SORT", payload: "Latest" })}>
                        <i className="fa fa-sort-asc" aria-hidden="true"></i>
                        Latest
                    </button>
                </li>
            </ul>
        </div>
    )
}