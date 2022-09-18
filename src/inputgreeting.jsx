import { useState } from "react"

export default function Inputgreeting(){
    const [state,setstate] = useState('')
    return(
        <div style={{"margin":20}}>
          <input value = {state}
                 onChange={(state) => setstate(state.target.value)}/>
          <h1>{state}</h1>
          <button onClick={() => setstate('enter username')}>update</button>
        </div>
    )
}