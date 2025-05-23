

export default function Counter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }

    return (
        <>
            <h1>Count={count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}