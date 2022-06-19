import React from "react";

const Nav = ({isLoged}) => {

    return (
        <div className="nav dflexSB">
            <h1 className="nav-logo">LPH</h1>
            <ul className="nav-list dflexSB">
                <li>Main</li>
                <li>Card example</li>
                <li>Features</li>
                <li>Contact</li>
                <li className={isLoged ? "hidden" : ""}>Login</li>
                <li className={isLoged ? "" : "hidden"}>My archive</li>
                <li className={isLoged ? "" : "hidden"}><i className="fa-solid fa-circle-user"></i>Nickph</li>
            </ul>
        </div>
    )
}

export default Nav;
