import { useState } from "react"

export default function Toggler(){
    const [visible,setvisible] = useState(true)
    return(
        <div>
            {visible ? <h1 style={{"opacity":1}}>shruti</h1> : <h1 style={{"opacity":0}}>shruti</h1>}
            <button value={visible} onClick={()=> setvisible(!visible)}>{visible?'remove':'visible'}</button>  

        </div>
    )
}