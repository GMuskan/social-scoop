export const feedInitialState = {
    userFeed: [],
    infiniteFeed: [],
    isLoading: true,
    users: [],
    search: "",
    searchModal: false,
    newPostContent: "",
    newPostImage: null,
    activeSort: "Latest",
    editPostModal: false,
    commentModal: false,
    activePost: ""
}

export const FeedReducer = (state, action) => {
    switch (action.type) {
        case "SET_FEED":
            return { ...state, userFeed: action.payload }
        case "SET_INFINITE_FEED":
            return { ...state, infiniteFeed: action.payload }
        case "SET_LOADING":
            return { ...state, isLoading: action.payload }
        case "SET_USERS":
            return { ...state, users: action.payload }
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        case "SET_SEARCH_MODAL":
            return { ...state, searchModal: action.payload }
        case "SET_NEW_POST_CONTENT":
            return { ...state, newPostContent: action.payload }
        case "SET_NEW_POST_IMAGE":
            return { ...state, newPostImage: action.payload }
        case "SET_ACTIVE_SORT":
            return { ...state, activeSort: action.payload }
        case "SET_EDIT_POST_MODAL":
            return { ...state, editPostModal: action.payload }
        case "SET_COMMENT_MODAL":
            return { ...state, commentModal: action.payload }
        case "SET_ACTIVE_POST":
            return { ...state, activePost: action.payload }
        default:
            return state
    }
}