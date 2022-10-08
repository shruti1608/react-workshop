import { BiSave } from "react-icons/bi";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { Todocontext } from "./Todocontex";

export default function Todolistitem({isedit,setisedit}){

  const [list,setlist] = useContext(Todocontext)

  function updateitem(itm, id, isedit) {
   // console.log("inside updateitm", itm, id, isedit);
     setisedit([...isedit,id])
    // console.log("inside updateitm after", itm, id, isedit);
    
  }
  
  function oncomplelehandler(id) {
    //save
    //setisedit();
    const newisEdit = isedit.filter((item, o) => item !== id);
      setisedit(newisEdit);
  }

  function onupdatehandler(e,itm, id) {
  
   // console.log("inside onupdatehandler",itm,"list:",list);
   setlist( list.map((item,idx) => {
      if (idx === id) {
    //    console.log("yes",e.target.value)
        item = e.target.value;
        //setstate(item)
        return item;
      }
      return item;
    })
   ) 
  }

  function handledelete(id) {
    // console.log(id,"delete")
    setlist(list.filter((item, idx) => idx !== id));
  }

    return(
      <div>
      {list.map((itm, id) => (
        <div key={id} className="listStyle">
          <div className="innerlistStyle">
            { isedit.includes(id)?(
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
    )
}