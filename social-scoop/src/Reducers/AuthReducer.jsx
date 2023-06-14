const localstorageToken = localStorage.getItem("token");
const localStorageUser = JSON.parse(localStorage.getItem("user"));

export const authInitialState = {
    token: localstorageToken,
    user: localStorageUser
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: JSON.parse(action.payload) }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        // case "UPDATE_USER_DETAILS":
        //     return { ...state, user: action.payload }
        default:
            return state
    }
}