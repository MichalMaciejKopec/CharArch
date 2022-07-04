import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";


const Stats = ({race, cla, dex, con}) => {

    const [classData, setClassData] = useState({"hit_die":0});
    const [raceData, setRaceData]=useState({});
    const [prof, setProf] = useState(2);
    const [pasPer, setPasPer] = useState(10);
    const [ac, setAC] = useState(10);

    useEffect(() => {
        fetch(dnd5eAPI + "/classes/" + cla)
            .then(r => r.json())
            .then(data => {
                if (cla === "none" || !cla) {
                } else setClassData(data);
            })
            .catch(err => console.log(err));
    }, [cla])

    useEffect(() => {
        fetch(dnd5eAPI + "/races/" + race)
            .then(r => r.json())
            .then(data => {
                if (race === "none" || !race) {
                } else setRaceData(data);
            })
            .catch(err => console.log(err))
    }, [race])

    useEffect(()=>{
        setAC(10+ Math.floor((dex-10)/2))
    },[dex])

    return (
        <div className="stats dflexC flexCol">
            <label>Proficiency bonus: +{prof}</label>
            <label>Passive perception: {pasPer}</label>
            <label>Armor class: {ac}</label>
            <label>Speed: {raceData.speed}</label>
            <label>Hit points: {classData.hit_die + Math.floor((con-10)/2)}</label>
            <label>Initiative: {Math.floor((dex-10)/2)}</label>

        </div>
    )
}

export default Stats;
