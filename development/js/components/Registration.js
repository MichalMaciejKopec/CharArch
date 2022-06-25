import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {usersAPI} from "../apiPaths";

const Registration = ({isLoged, user, isLoggedIn}) => {

    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("Login is taken");
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoged) {
            navigate("/myArch")
            isLoggedIn(true, user, true);
        }
        fetch(usersAPI)
            .then(r => r.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, [])

    const handleClick = (e) => {
        e.preventDefault();

        const loginInput = e.target.parentElement.firstElementChild.lastElementChild;
        const passInput = e.target.parentElement.children[2].lastChild;
        const errText = e.target.parentElement.children[1];
        const usersLogins = users.map(el => el.login);

        if (!login || !password) {
            setError("Enter login and password");
            if (!login) loginInput.classList.add("input-err");
            else loginInput.classList.remove("input-err")
            if (!password) passInput.classList.add("input-err");
            else passInput.classList.remove("input-err");
            if (errText.classList.contains("hidden")) errText.classList.toggle("hidden")
            return;
        }

        if (usersLogins.includes(login)) {
            setError("Login is taken")
            loginInput.classList.add("input-err")
            if (errText.classList.contains("hidden")) errText.classList.toggle("hidden");
            passInput.classList.remove("input-err");
        } else {
            fetch(usersAPI, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "login": login,
                    "password": password
                })
            })
                .then(r => r.json())
                .then(data => setUsers(prev => [...prev, data]))
                .catch(err => console.log(err));
            isLoggedIn(true, login, true);
            navigate("/myArch");
        }
    }

    const handleChange = (e) => {
        if (e.target.id === "login") setLogin(e.target.value);
        else setPassword(e.target.value);
    }

    return (
        <div className="smallForm dflexC">
            <div className="border dflexC flexCol w100" id="example">
                <h1>Sign up</h1>
                <form className="dflexC flexCol">
                    <div>
                        <label htmlFor="login">Login:</label>
                        <input onChange={handleChange} id="login" value={login}/>
                    </div>
                    <p className="hidden">{error}</p>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} id="password" type="password"/>
                    </div>
                    <button type="submit" onClick={handleClick}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;
