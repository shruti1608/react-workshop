import { useState } from "react"

export default function Toggler(){
    const [visible,setvisible] = useState(true)
    return(
        <div>
            {visible ? <h1 style={{"display":"inline"}}>shruti</h1> : <h1 style={{"display":"none"}}>shruti</h1>}
            <button value={visible} onClick={()=> setvisible(!visible)}>{visible?'remove':'visible'}</button>  

        </div>
    )
}