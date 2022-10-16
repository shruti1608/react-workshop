import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";

// let fetchdata = false
// const getdata = axios.get("http://localhost:3000/tasks")


function Todolist({ state, setstate ,isedit}) {
  const [list, setlist] = useContext(Todocontext);
  const data=[];
 


  useEffect(() => {
    console.log("in use effect");

    axios.get("http://localhost:3000/tasks")
      //.then(res =>  console.log(res.data))
      .then(res => setlist(res.data)) 
      .then( console.log('after useeff',list))
      .catch(e => console.error(e))  
  },[]);
 
  
  // getdata.then(res => setlist(res.data), fetchdata = true)
  //        .catch((e) => console.error(e))

 const onclickhandler = async() =>{
    // if (state !== "") {
    //   setlist((curr) => [...curr, state]);
    //   setstate("");
    // }
    try{
    const title = state;
 const res =  await axios.post("http://localhost:3000/tasks", {title});
              await data.push(res.data);
              await setlist([...list,...data]);
              await setstate("")
    }
    catch(error){
      console.error(error)
    }
      // .then((res) => {data.push(res.data);setlist([...list,...data])})
      // .then(() => setstate(""))
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

//console.log("before promise")
  // if(fetchdata === true){
  //   console.log("after promise")
  //   throw getdata
  // }

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

export default Todolist;