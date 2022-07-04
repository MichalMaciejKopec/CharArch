import React, {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Baner from "./components/Baner"
import Example from "./components/Example";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Settings from "./components/Settings"
import MyChars from "./components/MyChars";
import AddChar from "./components/AddChar";

const Main = () => {

    const [user, setUser] = useState("")
    const [isLogged, setIsLoged] = useState(false);
    const [arch, setArch] = useState(false);

    const isLoggedIn = (loged, user, isInArch) => {
        if (loged) {
            setIsLoged(true);
            setUser(user)
            setArch(isInArch)
        } else {
            setIsLoged(false);
            setUser(user)
            setArch(isInArch)
        }
    }

    return (
        <div className="dflexC flexCol hero">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch} user={user} isLoggedIn={isLoggedIn}/>
                            <Baner path="/#"/>
                            <Features path="/#feature"/>
                            <Example/>
                        </>
                    }/>
                    <Route exact path="registration" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch}  user={user} isLoggedIn={isLoggedIn}/>
                            <Registration isLoged={isLogged} user={user} isLoggedIn={isLoggedIn}/>
                        </>
                    }/>
                    <Route exact path="login" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch}  user={user} isLoggedIn={isLoggedIn}/>
                            <Login isLoggedIn={isLoggedIn}/>
                        </>
                    }/>
                    <Route exact path="settings" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch}  user={user} isLoggedIn={isLoggedIn}/>
                            <Settings/>
                        </>
                    }/>
                    <Route exact path="myArch" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch} user={user} isLoggedIn={isLoggedIn}/>
                            <MyChars/>
                        </>
                    }/>
                    <Route exact path="addChar" element={
                        <>
                            <Nav isLoged={isLogged} arch={arch} user={user} isLoggedIn={isLoggedIn}/>
                            <AddChar/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Main/>, document.getElementById("app"));
