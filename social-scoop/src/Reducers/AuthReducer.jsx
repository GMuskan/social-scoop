const localstorageToken = localStorage.getItem("token");
const localStorageUser = localStorage.getItem("user");

export const authInitialState = {
    token: localstorageToken,
    user: localStorageUser
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        default:
            return state
    }
}