import React from "react";
import {useEffect, useState} from "react";
import {dnd5eAPI} from "../apiPaths";

const AbilityScores = ({race, abilityScore}) => {

    const [data, setData] = useState({});
    const [str, setStr] = useState([0, 0, 0]);
    const [dex, setDex] = useState([0, 0, 0]);
    const [con, setCon] = useState([0, 0, 0]);
    const [int, setInt] = useState([0, 0, 0]);
    const [wis, setWis] = useState([0, 0, 0]);
    const [cha, setCha] = useState([0, 0, 0]);
    const [scores, setScores] = useState({
        "str": 0,
        "dex": 0,
        "con": 0,
        "int": 0,
        "wis": 0,
        "cha": 0
    })

    useEffect(() => {
        setStr([str[0], 0, str[0]])
        setDex([dex[0], 0, dex[0]])
        setCon([con[0], 0, con[0]])
        setInt([int[0], 0, int[0]])
        setWis([wis[0], 0, wis[0]])
        setCha([cha[0], 0, cha[0]])
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
                const bonus = el.bonus
                switch (el.ability_score.index) {
                    case "str":
                        setStr([str[0], bonus, str[0] + bonus]);
                        break;
                    case "dex":
                        setDex([dex[0], bonus, dex[0] + bonus]);
                        break;
                    case "con":
                        setCon([con[0], bonus, con[0] + bonus]);
                        break;
                    case "int":
                        setInt([int[0], bonus, int[0] + bonus]);
                        break;
                    case "wis":
                        setWis([wis[0], bonus, wis[0] + bonus]);
                        break;
                    case "cha":
                        setCha([cha[0], bonus, cha[0] + bonus]);
                }
            });
        }
    }, [data])

    useEffect(() => {
        setScores({
            "str": str[0] + str[1],
            "dex": dex[0] + dex[1],
            "con": con[0] + con[1],
            "int": int[0] + int[1],
            "wis": wis[0] + wis[1],
            "cha": cha[0] + cha[1]
        })
    },[str,dex,con,int,wis,cha])

    useEffect(()=>{
        abilityScore(scores);
    },[scores])

    const handleChange = (e) => {
        const val = +e.target.value;
        switch (e.target.name) {
            case "str":
                setStr([val, str[1], val + str[1]]);
                break;
            case "dex":
                setDex([val, dex[1], val + dex[1]]);
                break;
            case "con":
                setCon([val, con[1], val + con[1]]);
                break;
            case "int":
                setInt([val, int[1], val + int[1]]);
                break;
            case "wis":
                setWis([val, wis[1], val + wis[1]]);
                break;
            case "cha":
                setCha([val, cha[1], val + cha[1]]);
        }
    }

    return (
        <div className="ability-scores flexCol dflexC">
            <label>
                Strength:<input type="number" name="str" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{str[1]}</label>
                <label>Sum: {str[2]}</label>
                <label>Mod: {Math.floor((str[2]-10)/2)}</label>
            </label>
            <label>
                Dexterity:<input type="number" name="dex" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{dex[1]}</label>
                <label>Sum: {dex[2]}</label>
                <label>Mod: {Math.floor((dex[2]-10)/2)}</label>
            </label>
            <label>
                Condition:<input type="number" name="con" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{con[1]}</label>
                <label>Sum: {con[2]}</label>
                <label>Mod: {Math.floor((con[2]-10)/2)}</label>
            </label>
            <label>
                Int:<input type="number" name="int" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{int[1]}</label>
                <label>Sum: {int[2]}</label>
                <label>Mod: {Math.floor((int[2]-10)/2)}</label>
            </label>
            <label>
                Wisdom:<input type="number" name="wis" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{wis[1]}</label>
                <label>Sum: {wis[2]}</label>
                <label>Mod: {Math.floor((wis[2]-10)/2)}</label>
            </label>
            <label>
                Charisma:<input type="number" name="cha" min="1" max="20" onChange={handleChange}/>
                <label>Race bonus:{cha[1]}</label>
                <label>Sum: {cha[2]}</label>
                <label>Mod: {Math.floor((cha[2]-10)/2)}</label>
            </label>
        </div>
    )
}

export default AbilityScores;
