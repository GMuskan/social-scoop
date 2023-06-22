const localstorageToken = localStorage.getItem("token");
const localStorageUser = JSON.parse(localStorage.getItem("user"));

export const authInitialState = {
    token: localstorageToken,
    user: localStorageUser,
    bookmarks: [],
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        case "SET_BOOKMARKS":
            return { ...state, bookmarks: action.payload }
        default:
            return state
    }
}