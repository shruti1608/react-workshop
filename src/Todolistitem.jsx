import {useContext} from "react";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { Todocontext } from "./Todocontex";
import { BiSave } from "react-icons/bi";

export default function Todolistitem({key,title,isedit,onupdatehandler,oncomplelehandler,updateitem,handledelete}){

  

  
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
  