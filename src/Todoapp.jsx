import React,{  useState, Suspense } from "react";
//import Todoitem from "./Todoitem";
//import Todolist from "./Todolist";
import { Todocontext } from "./Todocontex";
import ErrorBoundary from "./Errorboundry";

import "./Todostyle.css";

const Todoitem = React.lazy(() => import("./Todoitem"));
const Todolist = React.lazy(() => import("./Todolist"));

export default function Todoapp() {
  const [state, setstate] = useState("");
  const [list, setlist] = useState([]);
  const [isedit, setisedit] = useState([]);
 

  return (
    <Todocontext.Provider value={[list,setlist]}>
    <div className="rootStyle">
      <h1 className="textStyle">MY Todos</h1>
      <div className="innerrootStyle">
      <ErrorBoundary fallback={<p>Could not fetch </p>}>
        <Suspense fallback={<p>loading...</p>}>
        <Todoitem state={state} setstate={setstate} isedit={isedit} setisedit={setisedit} />
        </Suspense>
        
        <Suspense fallback={<p>loading...</p>}>
        <Todolist isedit={isedit} setisedit={setisedit}/>
        </Suspense>
        </ErrorBoundary>
      </div>
    </div>
    </Todocontext.Provider>
  );
}
