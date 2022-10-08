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
  
  function oncomplelehandler(id,itm) {
    //save
    //setisedit();
    const newisEdit = isedit.filter((item, o) => item !== id);
      setisedit(newisEdit);

      const title = itm
      fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PUT",
        body:JSON.stringify({ title}),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
})
.then(res => res.json())
.then(body => console.log(body))
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
    fetch(`http://localhost:3000/tasks/${id}`, {
     method: 'DELETE',
    });
  }

    return(
      <div>
      {list.map((itm, id) => (
        <div key={id} className="listStyle">
          <div className="innerlistStyle">
            { (isedit.includes(id) )?(
              <div className="innerlistStyle">
                <input
                  defaultValue={itm}
                  //value={itm} 
                  style={{ width: 450 }}
                  onChange={(e) => onupdatehandler(e, itm,id)}
                ></input>
                <BiSave
                  style={{ marginLeft: 10 }}
                  onClick={() => oncomplelehandler(id,itm)}
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