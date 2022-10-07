import { useContext } from "react";
import { Todocontext } from "./Todocontex";

export default function Todolist({state,setstate}){
const [list,setlist] = useContext(Todocontext)
    function onclickhandler() {
        if (state !== "") {
          setlist((curr) => [...curr, state]);
          setstate("");
        }
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