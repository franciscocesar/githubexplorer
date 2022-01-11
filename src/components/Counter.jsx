import { useState } from "react" // hook

export function Counter(){

    const [counter, setCounter] = useState(0)
    
    function incremment(){
       setCounter(counter + 1)
    }
    return (
        <div>
            <span>{counter}</span>
            <button type="button" onClick={incremment}>incremment</button>
        </div>
    )
}