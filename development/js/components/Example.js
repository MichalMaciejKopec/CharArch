import React from "react";

const Example = () => {
//TODO: usunąć temp z klas
    return (
        <div className="example dflexC w100 temp" id="example">
            <label htmlFor="system">Choose a system:</label>
            <select name="system">
                <option value="D&D5ed">D&D 5e</option>
            </select>
        </div>
    )
}

export default Example;
