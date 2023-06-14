import { useState } from "react"
import { SortModal } from "../SortModal/SortModal";

export const SortBar = () => {
    const [sortModal, setSortModal] = useState(false);
    return (
        <div>
            <h1>Sort Posts</h1>
            <i className="fa fa-sort" aria-hidden="true" onClick={() => setSortModal((prev) => !prev)}></i>
            {sortModal && <SortModal />}
        </div>
    )
}