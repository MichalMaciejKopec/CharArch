import React from "react";

const Nav = ({isLoged}) => {

    return (
        <div className="nav dflexSB w100" id="nav">
            <h1 className="nav-logo">LPH</h1>
            <ul className="nav-list dflexSB">
                <li><a href="#baner">Main</a></li>
                <li><a href="#example">Card example</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#footer">Contact</a></li>
                <li className={isLoged ? "hidden" : ""}><a href="">Login</a></li>
                <li className={isLoged ? "" : "hidden"}><a href="">My archive</a></li>
                <li className={isLoged ? "" : "hidden"}><a href=""><i className="fa-solid fa-circle-user"></i>Nickph</a></li>
            </ul>
        </div>
    )
}

export default Nav;
