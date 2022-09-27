import { useState } from "react";
import { BsPencilSquare,BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Todoapp() {
  const [state, setstate] = useState("");
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState(false);
  function onclickhandler() {
    if (state !== "") {
      setlist((curr) => [...curr, state]);
      setstate("");
    }
  }
  function handlelist(id) {
    setedit(true);
    //console.log(setstate((id) => id.target.value))
  }
  function deleteitem(id){
  const idx = id
  //console.log(idx)
  setlist( list.filter((item,id) => id !== idx));
    
  }

  function onhandlechange(e,id){
    console.log(id)
    setstate(e.target.value,id)
  }

  const rootStyle = {
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  };
  const textStyle = {
    alignSelf: "center",
    color: "orange",
  };
  const innerrootStyle = {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "column",
  };
  const inputStyle = {
    boxShadow: "2px 2px orange",
    padding: 10,
    width: 500,
    borderRadius: 10,
  };
  const buttonStyle = {
    marginLeft: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    height: 30,
    width: 50,
    boxShadow: "2px 2px 2px lightgray",
    border: "1px solid orange",
  };
  const listStyle = {
    padding: 10,
    backgroundColor: "orange",
    boxShadow: "2px 2px 2px lightgray",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    display: "flex",
  };
  const listtextStyle = {
    paddingLeft: 10,
  };

  return (
    <div style={rootStyle}>
      <h1 style={textStyle}>MY Todos</h1>
      <div style={innerrootStyle}>
        <input
          style={inputStyle}
          value={state}
          placeholder="Enter Task"
          onChange={(state) => setstate(state.target.value)}
        />
        <button style={buttonStyle} value={list} onClick={onclickhandler}>
          Add
        </button>

        {list.map((ele, idx) => (
          <div key={idx} style={listStyle}>
            {/* <span style={listtextStyle} key={idx}>{ele}</span> */}
            {edit === true ? (
              <div>
              <input
                value={state}
                onChange={(e) => onhandlechange(e,idx)}/>
              <BsFillCheckCircleFill/>
              </div>
            ) : (
              <span style={listtextStyle}>
                {ele}
              </span>
            )}

            <BsPencilSquare onClick={() => handlelist(idx)}/>
            <MdDelete onClick={() => deleteitem(idx) }/>

          </div>
        ))}
      </div>
    </div>
  );
}
