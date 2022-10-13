import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";

export default function Todolist({ state, setstate ,isedit}) {
  const [list, setlist] = useContext(Todocontext);
  const data=[];
  useEffect(() => {
    console.log("in use effect");

    axios.get("http://localhost:3000/tasks")
      //.then(res =>  console.log(res.data))
      .then(res => setlist(res.data)) 
      .then( console.log('after useeff',list))
      .catch(e => console.error(e))  
  },[state]);
 
 

  function onclickhandler() {
    // if (state !== "") {
    //   setlist((curr) => [...curr, state]);
    //   setstate("");
    // }
    const title = state;
    axios.post("http://localhost:3000/tasks", {title})
    
      .then((res) => {data.push(res.data);setlist([...list,...data])})
    //  .then((res) => console.log('post',res.data))
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
