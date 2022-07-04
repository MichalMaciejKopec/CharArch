import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Race from "./Race";
import Class from "./Class";
import Alignment from "./Alignment";
import AbilityScores from "./AbilityScores";
import Stats from "./Stats";

const AddChar = () => {
    const {register, handleSubmit, watch} = useForm();

    const [race, setRace] = useState("");
    const [cla, setCla] = useState("")
    const [ability, setAbility] = useState({
        "str": 0,
        "dex": 0,
        "con": 0,
        "int": 0,
        "wis": 0,
        "cha": 0
    })

    useEffect(() => {
        setRace(watch("race"));
        setCla(watch("class"))
    }, [watch("race"),watch("class")])

    const changeAbility = (obj) => {
        setAbility({...ability, ...obj})
    }

    const onSubmit = (data) => {
        const data2 = {
            ...data,
            ...ability
        };
        console.log(data2)
    }

    return (
        <div className="addchar dflexC flexCol">

            <h1>Add your character</h1>
            <form className="dflexC flexCol" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Character name:<input {...register("name")}/></label>
                    <Race label="race" register={register}/>
                    <Class label="class" register={register}/>
                </div>
                <div>
                    <Alignment label="alignment" register={register}/>
                    <label>Level:<input type="number" min="1" defaultValue="1" {...register("level")}/></label>
                    <label>EXP:<input type="number" min="0" defaultValue="0" {...register("exp")}/></label>
                </div>
                <div className="base-stats dflexC flexRow">
                    <AbilityScores race={race} abilityScore={changeAbility}/>
                    <Stats race={race} cla={cla} dex={ability.dex} con={ability.con}/>
                </div>

                <input className="btn" type="submit" value="Add character"/>
            </form>
        </div>
    )
}

export default AddChar;
