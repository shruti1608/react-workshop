import {useContext,useState} from "react";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { Todocontext } from "./Todocontex";
import { BiSave } from "react-icons/bi";
import axios from "axios";

export default function Todolistitem({key,title,isedit,setisedit}){
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
              //console.log("in put",inputvalue)
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
  
  return(
    <div key={key} className="listStyle">
          <div className="innerlistStyle">
            {isedit.includes(key) ? (
              <div className="innerlistStyle">
                <input
                  defaultValue={title}
                  // value={e.target.value}
                  style={{ width: 450 }}
                  onChange={(e) => onupdatehandler(e, title, key)}
                ></input>
                <BiSave
                  style={{ marginLeft: 10 }}
                  onClick={() => oncomplelehandler(key, title)}
                ></BiSave>
              </div>
            ) : (
              <span className="listtextStyle">{title}</span>
            )}
            <div>
              <AiTwotoneEdit
                onClick={() => updateitem(title,key, isedit)}
                style={{ marginRight: "10" }}
              ></AiTwotoneEdit>
              <AiFillDelete onClick={() => handledelete(key)}></AiFillDelete>
            </div>
          </div>
        </div>
      )}
  