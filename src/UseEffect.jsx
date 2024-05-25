import React, {useState, useEffect} from 'react'
function Component(){
    const[count, setCount] = useState(0);
    const[color, setColor] = useState("blue");
    useEffect(() => {
        document.title = `Count ${count} ${color}`;
    });
    function handleInc(){
        setCount(c => c + 1);
    }
    function handleDec(){
        setCount(c => c - 1);
    }
    function handleColor(){
        setColor(c => c === "blue" ? "purple" : "blue");
    }
    return(<div>
              <p style={{color: color}}>Count: {count}</p>
              <button onClick={handleInc}>Increment</button>
              <button onClick={handleDec}>Decrement</button>
              <button onClick={handleColor}>Color change</button>
           </div>)
}
export default Component