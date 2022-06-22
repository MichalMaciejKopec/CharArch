import React from "react";
import {useNavigate} from "react-router-dom";


const Nav = ({onMain, isLoged}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/" + e.target.attributes.href.value);
    }


    return (
        <div className="nav dflexSB w100" id="nav">
            <h1 className="nav-logo">LPH</h1>
            <ul className="nav-list dflexSB">
                <li><a href={onMain ? "#" : ""} onClick={handleClick}>Main</a></li>
                <li><a href={onMain ? "#features" : ""} onClick={handleClick}>Features</a></li>
                <li><a href={onMain ? "#example" : ""} onClick={handleClick}>Card example</a></li>
                <li><a href={onMain ? "#footer" : ""} onClick={handleClick}>Contact</a></li>
                <li className={isLoged ? "hidden" : ""}><a href="login" onClick={handleClick}>Login</a></li>
                <li className={isLoged ? "" : "hidden"}><a onClick={handleClick}>My archive</a></li>
                <li className={isLoged ? "" : "hidden"}><a onClick={handleClick}><i
                    className="fa-solid fa-circle-user"/>Nickph</a></li>
            </ul>
        </div>
    )
}

export default Nav;
