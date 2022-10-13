import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";

export default function Todolist({ state, setstate ,isedit}) {
  const [list, setlist] = useContext(Todocontext);
 
  useEffect(() => {
    console.log("in use effect");
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then( console.log("in useeff",list))
      .then(body => setlist(body)) 
      .then( console.log('after useeff',list))
      .catch(e => console.error(e))  
  },[state]);
 
 

  function onclickhandler() {
    // if (state !== "") {
    //   setlist((curr) => [...curr, state]);
    //   setstate("");
    // }
    const title = state;
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((body) => setlist([body]))
      .then(() => console.log('post',list))
      .then(() => setstate(""))
  }

  function compare(a, b) {

    const A = a.title.toUpperCase();
    const B = b.title.toUpperCase();
  
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }
  
 
  function sortlistitem() {
   
   const sort = list.sort(compare);
   setlist([...sort])
  //   console.log("after sorting",sort)
  }

  return (
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
  );
}
