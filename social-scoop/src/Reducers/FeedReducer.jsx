export const feedInitialState = {
    userFeed: [],
    isLoading: true,
    users: [],
    search: "",
    searchModal: false
}

export const FeedReducer = (state, action) => {
    switch (action.type) {
        case "SET_FEED":
            return { ...state, userFeed: action.payload }
        case "SET_LOADING":
            return { ...state, isLoading: action.payload }
        case "SET_USERS":
            return { ...state, users: action.payload }
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        case "SET_SEARCH_MODAL":
            return { ...state, searchModal: action.payload }
        default:
            return state
    }
}