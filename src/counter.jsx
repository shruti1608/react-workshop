//import { useState } from "react";

export default function Counter({count,setcount}){
   // const [count,setcount] = useState(0)
    function decrementcount(){
        if(count  > 0){
         setcount(count - 1)
        }
       }
    function incrementcount(){  
         setcount(count + 1)  
        }
    const rootStyle={
        display:"flex",
        flexDirection:"row"
    }  
    const buttonStyle={
        margin:10,
        padding:10  
    }  
    return(
        <div style={rootStyle}>
            <button style={buttonStyle} value={count} onClick={incrementcount}>+</button>
            <h1>{count}</h1> 
            <button style={buttonStyle} value={count} onClick={decrementcount}>-</button>

        </div>
    );
}