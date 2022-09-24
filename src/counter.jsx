//import { useState } from "react";
import { useContext } from "react"
import { Countercontext,Usercontext } from "./context"

export default function Counter(){
   // const [count,setcount] = useState(0)
   const [count,setcount] = useContext(Countercontext)
   const [user] = useContext(Usercontext)
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
            <h1>hello {user} </h1>
        </div>
    );
}