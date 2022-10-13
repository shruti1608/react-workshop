import {useContext} from "react";
import { Todocontext } from "./Todocontex";
import { BiSave } from "react-icons/bi";

export default function Todolistitem({isedit,setisedit,itm}){

  const [list, setlist] = useContext(Todocontext);

  function oncomplelehandler(id, itm) {
    //save
    setisedit(false);
    // const newisEdit = isedit.filter((item, o) => item !== id);
    // setisedit(newisEdit);

    const title = itm;
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((body) => console.log(body));
  }

  function onupdatehandler(e, itm, id) {
    // console.log("inside onupdatehandler",itm,"list:",list);
    setlist(
      list.map((item, idx) => {
        if (idx === id) {
          //    console.log("yes",e.target.value)
          item = e.target.value;
          //setstate(item)
          return item;
        }
        return item;
      })
    );
  }

  return(
    <>
    {isedit ? (
              <div className="innerlistStyle">
                <input
                  defaultValue={itm}
                  //value={itm}
                  style={{ width: 450 }}
                  onChange={(e) => onupdatehandler(e, itm, itm.id)}
                ></input>
                <BiSave
                  style={{ marginLeft: 10 }}
                  onClick={() => oncomplelehandler(itm.id, itm)}
                ></BiSave>
              </div>
            ) : (
              <span className="listtextStyle">{itm}</span>
            )}
    </>
  )
} 