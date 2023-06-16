import { Route, Routes } from "react-router"
import { Login } from "../features/auth/components/Login/Login"
import { SignUp } from "../features/auth/components/SignUp/SignUp"
import { Home } from "../Pages/Home/Home"
import { PrivateRoute } from "./PrivateRoutes"
import { Explore } from "../Pages/Explore/Explore"
import { Bookmark } from "../Pages/Bookmark/Bookmark"
import { UserProfile } from "../Pages/UserProfile/UserProfile"
import { useContext } from "react"
import { authContext } from "../Context/AuthContext"

export const AppRoutes = () => {

    const { authState } = useContext(authContext);

    const { activeUser } = authState;
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path="/explore" element={
                    <PrivateRoute>
                        <Explore />
                    </PrivateRoute>
                } />
                <Route path="/bookmarks" element={
                    <PrivateRoute>
                        <Bookmark />
                    </PrivateRoute>
                } />
                <Route path="/profile/:username" element={
                    <PrivateRoute>
                        <UserProfile activeUser={activeUser} />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}