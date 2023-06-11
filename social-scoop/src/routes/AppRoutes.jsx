import { Route, Routes } from "react-router"
import { Login } from "../features/auth/components/Login"
import { SignUp } from "../features/auth/components/SignUp"
import { Home } from "../Pages/Home/Home"
import { PrivateRoute } from "./PrivateRoutes"

export const AppRoutes = () => {
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
            </Routes>
        </div>
    )
}