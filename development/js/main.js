import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

import Nav from "./elements/Nav";

const Main = () => {

    const [isLoged, setIsLoged] = useState(false);

    const checkLogin = () => (loged) => {
        if (loged) setIsLoged(true);
        else setIsLoged(false);
    }
    return (
        <>
            <Nav isLoged={isLoged}/>
            <Baner/>
        </>
    )
}

ReactDOM.render(<Main/>, document.getElementById("app"));
