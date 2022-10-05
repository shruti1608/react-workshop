import { useState } from "react";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

import "./Todostyle.css";

export default function Todoapp() {
  const [state, setstate] = useState("");
  const [list, setlist] = useState([]);
  const [isedit, setisedit] = useState();
 // const [updateinput,setupdateinput] = useState(state)

  function onclickhandler() {
    if (state !== "") {
      setlist((curr) => [...curr, state]);
      setstate("");
    }
  }
  function handledelete(id) {
    // console.log(id,"delete")
    setlist(list.filter((item, idx) => idx !== id));
  }

  function updateitem(itm, id, isedit) {
    console.log("inside updateitm", itm, id, isedit);
     setisedit(id)
     console.log("inside updateitm after", itm, id, isedit);
    // list.map((ele, idx) => {
    //   if (idx === id) {
    //     console.log(idx, id);

    //     setisedit(true);
    //     Promise.resolve().then(() => console.log("match1", editstate));
    //     console.log("match2", editstate);
    //   }
    //   console.log(editstate, idx, id);
    // });
    //setlist([...list])
    //console.log("match",editstate)
  }
 // console.log("match", isedit);

  
  function oncomplelehandler(id) {
    //save
  //  console.log("inside oncompletehandler");
  //  console.log(id, "save id");
    setisedit();
  }

  function onupdatehandler(e,itm, id) {
  
   // console.log("inside onupdatehandler",itm,"list:",list);
   setlist( list.map((item,idx) => {
      if (idx === id) {
        console.log("yes",e.target.value)
        item = e.target.value;
        //setstate(item)
        return item;
      }
      return item;
    })
   ) 
  }

  return (
    <div className="rootStyle">
      <h1 className="textStyle">MY Todos</h1>
      <div className="innerrootStyle">
        <input
          className="inputStyle"
          value={state}
          placeholder="Enter Task"
          onChange={(state) => setstate(state.target.value)}
        />
        <button className="buttonStyle" value={list} onClick={onclickhandler}>
          Add
        </button>

        {list.map((itm, id) => (
          <div key={id} className="listStyle">
            <div className="innerlistStyle">
              {isedit === id ? (
                <div className="innerlistStyle">
                  <input
                    defaultValue={itm}
                    //value={itm} 
                    style={{ width: 450 }}
                    onChange={(e) => onupdatehandler(e, itm,id)}
                  ></input>
                  <BiSave
                    style={{ marginLeft: 10 }}
                    onClick={() => oncomplelehandler(id)}
                  ></BiSave>
                </div>
              ) : (
                <span className="listtextStyle">{itm}</span>
              )}
              <div>
                <AiTwotoneEdit
                  onClick={() => updateitem(itm, id, isedit)}
                  style={{ marginRight: "10" }}
                ></AiTwotoneEdit>
                <AiFillDelete onClick={() => handledelete(id)}></AiFillDelete>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
