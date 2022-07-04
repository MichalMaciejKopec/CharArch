import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";


const Race = ({label, register}) => {

    const [races, setRaces] = useState([]);

    useEffect(() => {
        fetch(dnd5eAPI + "/races")
            .then(r => r.json())
            .then(data => setRaces(data.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <label>Race:
                <select defaultValue="none" {...register(label)}>
                    <option value="none" disabled hidden>Select race</option>
                    {races.map(el => <option key={el.index} value={el.index}>{el.name}</option>)}
                </select>
            </label>
        </>
    )
}

export default Race;
