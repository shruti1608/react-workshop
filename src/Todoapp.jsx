import {  useState } from "react";
import Todoitem from "./Todoitem";
import Todolist from "./Todolist";
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
        
        <Todoitem state={state} setstate={setstate} isedit={isedit} setisedit={setisedit} />
        <Todolist isedit={isedit} setisedit={setisedit}/>
       
      </div>
    </div>
    </Todocontext.Provider>
  );
}
