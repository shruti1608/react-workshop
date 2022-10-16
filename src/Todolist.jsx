import { BiSave } from "react-icons/bi";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";

export default function Todolistitem({ isedit, setisedit }) {
  const [list, setlist] = useContext(Todocontext);
  const [error,seterror] = useState ()
   let inputvalue = '';

  // delete task
 const handledelete = async(id) => {
  try{
   await axios.delete(`http://localhost:3000/tasks/${id}`)
   await setlist(list.filter((item) => item.id !== id))
  }
  catch(err){
    console.error(err)
    seterror(err)
  }
      // .then(setlist(list.filter((item) => item.id !== id)))
      // .catch((e) => console.error(e));
  }

  // click on edit icon
  function updateitem(itm, id, isedit) {
    setisedit([...isedit, id]);
  }

  // update item
 const onupdatehandler = async(e, title, id) => {
    
    inputvalue = e.target.value;
   // console.log("inputvalue",inputvalue)
   try{
  await axios.put(`http://localhost:3000/tasks/${id}`, {title:inputvalue}) 
  await setlist(list.map((item) => { 
            if (item.id === id) {
              item.title = inputvalue;
              console.log("item.titles",item.title)
              //setstate(item)
              return item;
            }
            return item;
      })    
      )
    }
    catch(error){
     console.error(error)
    }
    // .then(() => {console.log("titlle",inputvalue);
    //   setlist(
    //     list.map((item) => { 
    //         if (item.id === id) {

    //           item.title = inputvalue;
    //           console.log("item.titles",item.title)
    //           //setstate(item)
    //           return item;
    //         }
    //         return item;

    //   })    
    //   )
    // });
    
    
  }

  //click on save icon
  const oncomplelehandler = (id, title)  =>{
    // setisedit();
   
    const newisEdit = isedit.filter((item) => item !== id);
    setisedit(newisEdit); 
  }
if(error){
  throw error
}
  return (
    <div>
      {console.log("list", list)}
      {list.map((itm) => (
        <div key={itm.id} className="listStyle">
          <div className="innerlistStyle">
            {isedit.includes(itm.id) ? (
              <div className="innerlistStyle">
                <input
                  defaultValue={itm.title}
                  // value={e.target.value}
                  style={{ width: 450 }}
                  onChange={(e) => onupdatehandler(e, itm.title, itm.id)}
                ></input>
                <BiSave
                  style={{ marginLeft: 10 }}
                  onClick={() => oncomplelehandler(itm.id, itm.title)}
                ></BiSave>
              </div>
            ) : (
              <span className="listtextStyle">{itm.title}</span>
            )}
            <div>
              <AiTwotoneEdit
                onClick={() => updateitem(itm.title, itm.id, isedit)}
                style={{ marginRight: "10" }}
              ></AiTwotoneEdit>
              <AiFillDelete onClick={() => handledelete(itm.id)}></AiFillDelete>
            </div>
          </div>
        </div>
        // <Todolistitem 
        // key={itm.id} 
        // title={itm.title}
        // onupdatehandler={onupdatehandler}
        // oncomplelehandler={oncomplelehandler}
        // updateitem={updateitem}
        // handledelete={handledelete}
        // isedit={isedit}
        // />
      )
      )}
    </div>
  );
}
