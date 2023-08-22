import React, { useEffect, useState } from "react";

function News() {
    const [name, setName] = useState("chinnu");
    const [age, setAge] = useState(22);
    useEffect(() => {
        console.log("use effect called");
    }, [name]);
    // syntax of useEffect
    // useEffect(setup_function, dependencies_Array)
    // react will render component or jsx first
    // then call the callback functions or setup functions
    console.log("rendering on screen");
    return (
        <div>
            <h1>{name}</h1>
            <label htmlFor="">Name : </label>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }} />

            <h1>{age}</h1>
            <label htmlFor="">Age : </label>
            <input type="text" onChange={(e) => {
                setAge(e.target.value);
            }} />
        </div>
    );
}
export default News;