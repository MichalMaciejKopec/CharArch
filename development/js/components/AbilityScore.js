import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";

const AbilityScore = ({race, label, abilityScore}) => {

    const [data, setData] = useState({});
    const [score, setScore] = useState({
        "value": 0,
        "bonus": 0,
        "score": 0,
    });

    let text;
    switch (label) {
        case "str":
            text = "Strength:"
            break;
        case "dex":
            text = "Dexterity:"
            break;
        case "con":
            text = "Constitution:"
            break;
        case "int":
            text = "Intelligence:"
            break;
        case "wis":
            text = "Wisdom:"
            break;
        case "cha":
            text = "Charisma:"
    }

    useEffect(() => {
        setScore({...score, "bonus": 0, "score": score.value});
        fetch(dnd5eAPI + "/races/" + race)
            .then(r => r.json())
            .then(data => {
                if (race === "none" || !race) {
                } else setData(data);
            })
            .catch(error => console.log(error))
    }, [race])

    useEffect(() => {
        if (Object.keys(data).includes("ability_bonuses")) {
            data.ability_bonuses.map(el => {
                if (el.ability_score.index === label) setScore({
                    ...score,
                    "bonus": +el.bonus,
                    "score": score.value + +el.bonus
                });
            })
        }
    }, [data])

    useEffect(() => {
        const timer = setTimeout(()=>{
            if (score.value!==0) {
                let change={}
                change[label] = score.score
                abilityScore(change)}
        },500)
        return () => {clearTimeout(timer)}
    }, [score,setScore])

    const handleChange = (e) => {
        const val = +e.target.value
        setScore({...score, "value": val, "score": score.bonus + val, "send": true})
    }

    return (
        <label>
            {text}<input type="number" min="1" max="20" onChange={handleChange}/>
            <label>Race bonus:{score.bonus}</label>
            <label>Sum: {score.score}</label>
        </label>
    )
}

export default AbilityScore;