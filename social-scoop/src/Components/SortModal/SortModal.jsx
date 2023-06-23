import { useContext } from "react";
import { feedContext } from "../../Context/FeedContext";
import "./SortModal.css"
export const SortModal = () => {
    const { feedDispatch } = useContext(feedContext);

    return (
        <div className="sortModalWrapper">
            <div className="sortModal">
                <ul>
                    <li>
                        <button className="trending-btn" onClick={() => feedDispatch({ type: "SET_ACTIVE_SORT", payload: "Trending" })}>
                            <div>
                                <i className="fa fa-line-chart" aria-hidden="true"></i>
                            </div>
                            <div>
                                Trending
                            </div>
                        </button>

                    </li>
                    <li>
                        <button className="oldest-btn" onClick={() => feedDispatch({ type: "SET_ACTIVE_SORT", payload: "Oldest" })}>
                            <div>
                                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                            </div>
                            <div>
                                Oldest
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="latest-btn" onClick={() => feedDispatch({ type: "SET_ACTIVE_SORT", payload: "Latest" })}>
                            <div>
                                <i className="fa fa-sort-asc" aria-hidden="true"></i>
                            </div>
                            <div>
                                Latest
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}