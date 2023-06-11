import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

export const Home = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);

    return (
        <div>
            This is home page.
            <i className="fa fa-sign-out" aria-hidden="true"
                onClick={() => logoutClickHandler(navigate, authState, authDispatch)}
            />
        </div>
    )
}