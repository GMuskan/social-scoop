import { useContext, useState } from "react"
import { SortModal } from "../SortModal/SortModal";
import { feedContext } from "../../Context/FeedContext";
import "./SortBar.css"
export const SortBar = () => {
    const { feedState } = useContext(feedContext);
    const [sortModal, setSortModal] = useState(false);
    return (
        <div className="sortbar">
           
                <p>{feedState?.activeSort} Posts</p>
            
                <i className="fa fa-sort" aria-hidden="true" onClick={() => setSortModal((prev) => !prev)}></i>
           
            {sortModal && <SortModal />}
        </div>
    )
}