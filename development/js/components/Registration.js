import React from "react";
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="registration dflexC">
            <div className="border dflexC flexCol w100" id="example">
                <h1>Sign up</h1>
                <form className="dflexC flexCol">
                    <div>
                        <label htmlFor="login">Login:</label>
                        <input id="login"/>
                    </div>
                    <div >
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password"/>
                    </div>
                    <button type="submit" onClick={handleClick}>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;
