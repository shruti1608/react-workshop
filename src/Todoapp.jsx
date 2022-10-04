
import { useState } from "react";
import { AiTwotoneEdit,AiFillDelete } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

import './Todostyle.css';

export default function Todoapp(){

const [state,setstate] =useState('')
const [list,setlist] = useState([])
const [isedit,setisedit] = useState(false)
//const [updateinput,setupdateinput] = useState(state)

function onclickhandler(){
    
    if(state !== ''){
    setlist(curr => [...curr,state])
    setstate('') 
    } 
    
}
function handledelete(id){

// console.log(id,"delete")
 setlist(list.filter((item,idx) => idx !== id ))
}


function updateitem(itm,id,editstate){
  console.log("inside updateitm",itm,id,editstate) 
 // setisedit(true)

  list.map((ele,idx) => { 
    if(idx === id){
        console.log(idx,id)
        setisedit(true)
    console.log("match",editstate)  
    }
   console.log(editstate,idx,id)
})
 //setlist([...list])
}

function oncomplelehandler(id){
    //save
    console.log('inside oncompletehandler');
    console.log(id,"save id")
    setisedit(false)
}

function onupdatehandler(e,id){
  console.log('inside onupdatehandler')
  console.log(e.target.value,id,"this")
  setlist(list.map((item,idx) => {
    if(idx === id){
      console.log('put existing value')
    } 
    return item
}))
  setisedit(false)
}



    return(

    <div className="rootStyle" >
       
        <h1 className="textStyle" >MY Todos</h1>
         <div className="innerrootStyle" >
            
            <input  className="inputStyle" 
               value={state} 
               placeholder='Enter Task'
               onChange={(state)=> setstate(state.target.value)}/>
            <button className="buttonStyle" 
                    value={list}
                    onClick={onclickhandler}>Add</button>
       
       
            {list.map((itm,id) => <div key={id} className="listStyle">
                                 <div className="innerlistStyle" > 
                                 
                                 {isedit  ? 
                                 <div className="innerlistStyle">
                                 <input defaultValue={state}
                                        style={{width:450}}
                                        onChange={(e) => onupdatehandler(e,id)}></input> 
                                 <BiSave style={{marginLeft:10}} 
                                         onClick={() => oncomplelehandler(id)}></BiSave>  
                                 </div>     
                                 :
                                  <span className="listtextStyle">{itm}</span>
                                  }
                                  <div>
                                  <AiTwotoneEdit onClick={() => updateitem(itm,id,isedit)} style={{marginRight:"10"}}></AiTwotoneEdit>
                                  <AiFillDelete  onClick={() => handledelete(id)}></AiFillDelete>
                                  </div>
                                  </div> 
                                  </div>)}
            
         </div>
        
    </div>
       
    )
}