import { useContext, useEffect } from "react";
import { Todocontext } from "./Todocontex";

export default function Todolist({state,setstate}){
  const [list,setlist] = useContext(Todocontext)
  var temp=[]
  useEffect(()=>{
  console.log("in use effect")
  fetch("http://localhost:3000/tasks")
  .then(res=>res.json())
  .then(body=>{ body.map(item=>{
  temp.push(item.title);
  }
  )
  }).then(a=>setlist([...list,...temp]))
  },[])


    function onclickhandler() {
        if (state !== "") {
          setlist((curr) => [...curr, state]);
          setstate("");
        }
        const title = state 
        fetch("http://localhost:3000/tasks",{
          method:"POST",
          body:JSON.stringify({ title}),
          headers: {'Content-type': 'application/json; charset=UTF-8',}
 })
 .then(res => res.json())
 .then(body => console.log(body))
        }
        
    
  
      function sortlistitem() {
        // console.log("before sort",list)
         const sort = list.sort()
         setlist([...sort])
       //  console.log("after sorting",list)
       }

    return(
        <div>
        <input
          className="inputStyle"
          value={state}
          placeholder="Enter Task"
          onChange={(state) => setstate(state.target.value)}
        />
        <button className="buttonStyle" value={list} onClick={onclickhandler}>
          Add
        </button>
        <button className="buttonStyle" value={list} onClick={sortlistitem}>
          sort
        </button>
        </div>
    )
}