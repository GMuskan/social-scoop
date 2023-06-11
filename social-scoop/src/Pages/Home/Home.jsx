import { useNavigate } from "react-router"
import { logoutClickHandler } from "../../services/authService";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet";

export const Home = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useContext(authContext);

    return (
        <div>
            <Helmet>
                <title>
                    Home | Social-Scoop
                </title>
            </Helmet>
            This is home page.
            <i className="fa fa-sign-out" aria-hidden="true"
                onClick={() => logoutClickHandler(navigate, authState, authDispatch)}
            />
        </div>
    )
}