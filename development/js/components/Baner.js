import React from "react";
import { useNavigate } from 'react-router-dom';

const Baner = ({onClick}) => {
//TODO: usunąć temp z klas
    const navigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/registration");
    }

    return (
        <div className="baner dflexC flexCol w100 temp" id="baner" >
            <h1 >CharArch</h1>
            <p>Welcome to CharArch, your character archive for 5th edition D&D</p>
            <a href="" className="btn" onClick={handleClick}>Let's get started</a>
        </div>
    )
}

export default Baner;
