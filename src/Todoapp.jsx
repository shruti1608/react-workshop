import React,{  useState, Suspense } from "react";
//import Todoitem from "./Todoitem";
//import Todolist from "./Todolist";
import { Todocontext } from "./Todocontex";
//import ErrorBoundary from "./Errorboundry";
import {ErrorBoundary} from 'react-error-boundary';
import {QueryClient,QueryClientProvider} from 'react-query';

import "./Todostyle.css";

const Todoitem = React.lazy(() => import("./Todoitem"));
const Todolist = React.lazy(() => import("./Todolist"));

export default function Todoapp() {
  const [state, setstate] = useState("");
  const [list, setlist] = useState([]);
  const [isedit, setisedit] = useState([]);
  const [isloding,setisloding]= useState(false)
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <Todocontext.Provider value={[list,setlist]}>
       
    <div className="rootStyle">
      <h1 className="textStyle">MY Todos</h1>
      <div className="innerrootStyle">
      <ErrorBoundary fallback={<h1>Could not fetch </h1>}>
        <Suspense fallback={<p>loading...</p>}>
        <Todoitem state={state} setstate={setstate} 
                  isedit={isedit} setisedit={setisedit} 
                  />
        </Suspense>
        
        <Suspense fallback={<p>loading...</p>}>
        <Todolist isedit={isedit} setisedit={setisedit}/>
        </Suspense>
        </ErrorBoundary>
      </div>
    </div>
   
    </Todocontext.Provider>
    </QueryClientProvider>
  );
}
