import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

import Nav from "./elements/Nav";
import Baner from "./elements/Baner"
import Example from "./elements/Example";
import Features from "./elements/Features";
import Footer from "./elements/Footer";

const Main = () => {

    const [isLoged, setIsLoged] = useState(false);

    const checkLogin = () => (loged) => {
        if (loged) setIsLoged(true);
        else setIsLoged(false);
    }
    return (
        <div className="dflexC flexCol ">
            <Nav isLoged={isLoged}/>
            <Baner/>
            <Features/>
            <Example/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Main/>, document.getElementById("app"));
