import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
export const PrivateRoute = ({ children }) => {
    const {authState} = useContext(authContext)

    const location = useLocation();
    return authState?.token ? children : <Navigate to="/" state={{ from: location?.pathname }} />;
}