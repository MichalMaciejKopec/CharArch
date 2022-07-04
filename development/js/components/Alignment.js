import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";


const Alignment = ({label, register}) => {

    const [alignments, setAlignments] = useState([]);

    useEffect(() => {
        fetch(dnd5eAPI + "/alignments")
            .then(r => r.json())
            .then(data => setAlignments(data.results))
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <label>Alignment:
                <select defaultValue="none" {...register(label)}>
                    <option value="none" disabled hidden>Select alignment</option>
                    {alignments.map(el => <option key={el.index} value={el.index}>{el.name}</option>)}
                </select>
            </label>
        </>
    )
}

export default Alignment;