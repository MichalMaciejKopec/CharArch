import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {usersAPI} from "../apiPaths";

const Login = ({isLoggedIn}) => {

    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        fetch(usersAPI)
            .then(r => r.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        const errorText = e.target.parentElement.children[2]
        const user = users.filter((el) => el.login === login)

        if (user.length !== 0) {
            if (user[0].password === password) {
                isLoggedIn(true, user[0].login, true)
                navigate("/myArch");
            } else {
                errorText.classList.remove("hidden")
                setError("Invalid login or password")
            }
        } else {
            errorText.classList.remove("hidden")
            setError("Invalid login")
        }

    }

    const handleChange = (e) => {
        if (e.target.id === "login") setLogin(e.target.value);
        else setPassword(e.target.value);
    }

    return (
        <div className="smallForm dflexC">
            <div className="border dflexC flexCol w100" id="example">
                <h1>Log in </h1>
                <form className="dflexC flexCol">
                    <div>
                        <label htmlFor="login">Login:</label>
                        <input onChange={handleChange} id="login" value={login}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} id="password" type="password"/>
                    </div>
                    <p className="hidden">{error}</p>
                    <button type="submit" onClick={handleClick}>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
