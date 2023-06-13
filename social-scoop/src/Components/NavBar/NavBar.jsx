import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
export const NavBar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);
    return (
        <nav>
            <div>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-compass" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-bookmark" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-sign-out" aria-hidden="true"
                    onClick={() => logoutClickHandler(navigate, authState, authDispatch)}
                />
            </div>
        </nav>
    )
}