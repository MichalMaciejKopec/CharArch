import React from "react";
import {useNavigate} from "react-router-dom";

const Dropdown = ({logout}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/" + e.target.attributes.href.value);
        if (e.target.attributes.href.value === "") {
            console.log("wylogowuje")
            logout(false);
        }
    }

    return (
        <div className="dropdown-content dflexC flexCol">
            <a href="settings" onClick={handleClick}>Settings</a>
            <a href="" onClick={handleClick}>Logout</a>
        </div>
    )
}

export default Dropdown;
