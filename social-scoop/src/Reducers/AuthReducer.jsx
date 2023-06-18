const localstorageToken = localStorage.getItem("token");
const localStorageUser = JSON.parse(localStorage.getItem("user"));
const localStorageActiveUser = JSON.parse(localStorage.getItem("activeUser"))

export const authInitialState = {
    token: localstorageToken,
    user: localStorageUser,
    bookmarks: localStorageUser?.bookmarks,
    ativeUser: localStorageActiveUser
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        case "SET_ACTIVE_USER":
            return { ...state, activeUser: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        case "SET_BOOKMARKS":
            return { ...state, bookmarks: action.payload }
        default:
            return state
    }
}