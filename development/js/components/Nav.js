import React from "react";
import {useNavigate} from "react-router-dom";
import Dropdown from "./Dropdown";

const Nav = ({isLoged, arch, user, isLoggedIn}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.attributes.length === 0) return;
        if (user) {
            if (e.target.attributes.href.value !== "myArch" && e.target.attributes.href.value !== "addChar") isLoggedIn(true, user, false)
            else isLoggedIn(true, user, true)
        }
        navigate("/" + e.target.attributes.href.value);
    }
    const logout = (bool) => {
        isLoggedIn(bool, "", false);
    }

    return (
        <div className="nav dflexSB w100" id="nav">
            <h1 className="nav-logo">LPH</h1>
            <ul className="nav-list dflexSB">
                <li><a href="" onClick={handleClick}>Main</a></li>
                <li className={arch ? "hidden" : ""}>
                    <a href="#features" onClick={handleClick}>Features</a>
                </li>
                <li className={arch ? "hidden" : ""}>
                    <a href="#example" onClick={handleClick}>Card example</a>
                </li>
                <li className={arch ? "hidden" : ""}>
                    <a href="#footer" onClick={handleClick}>Contact</a><
                    /li>
                <li className={isLoged ? "hidden" : ""}>
                    <a href="login" onClick={handleClick}>Login</a>
                </li>
                <li className={(isLoged && arch) || !isLoged ? "hidden" : ""}>
                    <a href="myArch" onClick={handleClick}>My archive</a>
                </li>
                <li className={arch ? "" : "hidden"}>
                    <a href="myArch" onClick={handleClick}>My characters</a>
                </li>
                <li className={arch ? "" : "hidden"}>
                    <a href="addChar" onClick={handleClick}>Add character</a>
                </li>
                <li className={isLoged ? "dropdown" : "hidden"}>
                    <a onClick={handleClick}>
                        <i className="fa-solid fa-circle-user"/>
                        {user}
                    </a>
                    <Dropdown logout={logout}/>
                </li>

            </ul>
        </div>
    )
}

export default Nav;
