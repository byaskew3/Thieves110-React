import React, { useState, useEffect } from "react";

export default function Test(props) {
    // useState()
    // Syntax: const [initialState, updateState] = useState()
    const [age, setAge] = useState(21)

    const addOne = () => {
        setAge(age + 1)
    }

    // useEffect() - just executes, doesn't return anything
    // Syntax: useEffect(callback func, array of dependencies)
    // NOTE: It will call when something in the array changes, if array is empty, it mimicks the componentDidMount() behavior

    useEffect(() => {
        console.log('useEffect trigger')
    }, [])

    return (
        <div>
            My age is {age}
            <button onClick={addOne}>+</button>

            Dylan's age is {props.age}
            <button onClick={props.addOne}>+</button>
        </div>
    );
}
