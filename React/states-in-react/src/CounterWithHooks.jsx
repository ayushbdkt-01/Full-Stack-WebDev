
import {useState} from 'react';

export default function CounterWithHooks(){
    // let [stateVariable, setStateVariable]=useState(10);
    let [count, setCount]=useState(0);
    console.log("component re-rendered");

    function increment(){
        // setCount ((count)=>{
        //     return count+1;

        // });
        // setCount ((count)=>{
        //     return count+1;

        // });
        setCount(count+1);
        console.log(count);
    }

    return (
        <>
            <h1>Count= {count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}