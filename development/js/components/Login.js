import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({login}) => {

    const navigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault();
        //TODO sprawdzenie czy w bazie + respons po sprawdzeniu z bazy login(true)
        console.log("Login")
        login(true)
        navigate("/");
    }

    return (
        <div className="registration dflexC">
            <div className="border dflexC flexCol w100" id="example">
            <h1>Sign in</h1>
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

export default Login;
