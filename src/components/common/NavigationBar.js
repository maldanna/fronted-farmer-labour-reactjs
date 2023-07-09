import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { NavLink, redirect } from 'react-router-dom';
import { LoggedInNavMenuItems, LogoutNavMenuItems } from "./NavMenuItems"
import "./styles/NavigationBar.css";
import { isUserLoggedIn } from "./user/UsersDetails";
import farmerlogo from "./../../resources/images/farmer-logo.jpeg";

function NavigationBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navRef = useRef();
    const navigate = useNavigate();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    useEffect(() => {
        if (isUserLoggedIn()) {
            setLoggedIn(true);
        }
    }, []);

    const redirectToHome = () => {
        navigate("/");
    }

    return (
        <>
            <div className="nav-bar-header">

                <NavLink to="/"><img className="famer-logo" src={farmerlogo} alt="logo" onClick={redirectToHome} />
                </NavLink>

                {/*ref={navRef} */}
                <nav >
                    {loggedIn ? (
                        LoggedInNavMenuItems.map((item) => (
                            <NavLink key={item.path} to={item.path}>
                                {item.title}
                            </NavLink>
                        ))
                    ) : (
                        LogoutNavMenuItems.map((item) => (
                            <NavLink key={item.path} to={item.path}>
                                {item.title}
                            </NavLink>
                        ))
                    )}
                    { /*
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>*/
                    }
                </nav>
                {/*
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
                */}

            </div>
        </>
    );
}
export default NavigationBar;
