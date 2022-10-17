import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";
import {useQuery}  from 'react-query';
import createResource from "./createResorse";

// let fetchdata = false
// const getdata = axios.get("http://localhost:3000/tasks")

const getResorse = createResource(axios.get("http://localhost:3000/tasks"))

function Todoitem({state,setstate}) {
const [, setlist] = useContext(Todocontext);
  // const [list,setlist] = useState([])
  const [isloding,setisloding] = useState(false)
  
  const data1=[];
 

const {data:list} = useQuery('todo-task',() => { 
  return axios.get("http://localhost:3000/tasks")})

console.log("result.",list)
// const {list: taskdata} = getResorse.read()
// useEffect(() => {setlist(taskdata)},[taskdata])

  // useEffect(() => {
  //   console.log("in use effect");
  //   axios.get("http://localhost:3000/tasks")
  //     //.then(res =>  console.log(res.data))
  //     .then(res => setlist(res.data), setisloding(true)) 
  //     .then( console.log('after useeff',list))
  //     .catch(e => console.error(e))  
  // },[]);
 
  
  

 const onclickhandler = async() =>{
    
    try{
    const title = state;
 const res =  await axios.post("http://localhost:3000/tasks", {title});
              await data1.push(res.data);
              await setlist([...list,...data1]);
              await setstate("")
    }
    catch(error){
      console.error(error)
    }
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
 
  }

//console.log("before promise")
  // if(fetchdata === true){
  //   console.log("after promise")
  //   throw getdata
  // }
if(isloding){
  <p>loding....</p>
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

export default Todoitem;