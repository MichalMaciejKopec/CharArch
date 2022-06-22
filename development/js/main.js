import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Baner from "./components/Baner"
import Example from "./components/Example";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";

const Main = () => {

    const [isLoged, setIsLoged] = useState(false);
    const [path, setPath] = useState(window.location.pathname)

    const checkLogin = (loged) => {
        console.log(loged + "  checklogin")
        if (loged) setIsLoged(true);
        else setIsLoged(false);

    }

    return (
        <div className="dflexC flexCol hero">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Nav onMain="true" isLoged={isLoged}/>
                            <Baner path="/#"/>
                            <Features path="/#feature"/>
                            <Example/>
                        </>
                    }/>
                    <Route exact path="/registration" element={
                        <>
                            <Nav onMain="false" isLoged={isLoged}/>
                            <Registration/>
                        </>
                    }/>
                    <Route exact path="/login" element={
                        <>
                            <Nav onMain="false" isLoged={isLoged}/>
                            <Login login={checkLogin}/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Main/>, document.getElementById("app"));
