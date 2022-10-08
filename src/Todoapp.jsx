import { useEffect, useState } from "react";
import Todolist from "./Todolist";
import Todolistitem from "./Todolistitem";
import { Todocontext } from "./Todocontex";

import "./Todostyle.css";

export default function Todoapp() {
  const [state, setstate] = useState("");
  const [list, setlist] = useState([]);
  const [isedit, setisedit] = useState([]);
 

  return (
    <Todocontext.Provider value={[list,setlist]}>
    <div className="rootStyle">
      <h1 className="textStyle">MY Todos</h1>
      <div className="innerrootStyle">
        
        <Todolist state={state} setstate={setstate} />
        <Todolistitem isedit={isedit} setisedit={setisedit}/>
       
      </div>
    </div>
    </Todocontext.Provider>
  );
}
