import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";


const Class = ({label, register}) => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(dnd5eAPI + "/classes")
            .then(r => r.json())
            .then(data => setClasses(data.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <label>Class:
                <select defaultValue="none" {...register(label)}>
                    <option value="none" disabled hidden>Select class</option>
                    {classes.map(el => <option key={el.index} value={el.index}>{el.name}</option>)}
                </select>
            </label>
        </>
    )
}

export default Class;
