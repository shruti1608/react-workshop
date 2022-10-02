import { useState } from "react";
import Todolist from './Todolist'
import { AiTwotoneEdit,AiFillDelete } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

export default function Todoapp(){
const [state,setstate] =useState('')
const [list,setlist] = useState([])
const [editstate,seteditstate] = useState(false)
const [updateinput,setupdateinput] = useState(state)

function onclickhandler(){
    
    if(state != ''){
    setlist(curr => [...curr,state])
    setstate('') 
    } 
    
}
function handledelete(id){

// console.log(id,"delete")
 setlist(list.filter((item,idx) => idx !== id ))
}
function updateitm(id){
   
    seteditstate(true)
    setlist([...list])
   
}


const rootStyle={
    justifyContent:"center",
    flexDirection:"column",
    display:"flex",
}
const textStyle={
    alignSelf:"center",
    color:"orange"
}
const innerrootStyle={
    marginTop:20,
    alignSelf:"center",
    flexDirection:"column"
}
const inputStyle={
    boxShadow:"2px 2px orange",
    padding:10,
    width:500,
    borderRadius:10
}
const buttonStyle={
    marginLeft:10,
    backgroundColor:"orange",
    borderRadius:5,
    height:30,
    width:50,
    boxShadow:"2px 2px 2px lightgray",
    border:"1px solid orange"
}
const listStyle={
    padding:10,
    backgroundColor:"orange",
    boxShadow:"2px 2px 2px lightgray",
    marginTop:10,
    borderRadius:10
}
const listtextStyle={
    paddingLeft:10,
}


    return(

    <div style={rootStyle}>
        <h1 style={textStyle}>MY Todos</h1>
         <div style={innerrootStyle}>
            
            <input style={inputStyle}
               value={state} 
               placeholder='Enter Task'
               onChange={(state)=> setstate(state.target.value)}/>
            <button style={buttonStyle}
                    value={list}
                    onClick={onclickhandler}>Add</button>
       
       
            {list.map((itm,id) => <div key={id} style={listStyle}>
                                 <div style={{display:"flex",justifyContent:"space-between"}}> 
                                 {editstate ? 
                                 <div style={{display:"flex",justifyContent:"space-between"}}>
                                 <input value={updateinput} 
                                        style={{width:450}}
                                        onChange={(e) => {setupdateinput(e.target.value);console.log(e.target.value,id,"this")}}></input> 
                                 <BiSave style={{marginLeft:10}} onClick={() => {console.log(id,"save id");seteditstate(false)}}></BiSave>  
                                 </div>     
                                 :
                                  <span style={listtextStyle}>{itm}</span>
                                  }
                                  <div>
                                  <AiTwotoneEdit value={editstate} style={{marginRight:"10"}} onClick={() => updateitm(id)}></AiTwotoneEdit>
                                  <AiFillDelete  onClick={() => handledelete(id)}></AiFillDelete>
                                  </div>
                                  </div> 
                                  </div>)}
            
         </div>
        
    </div>
       
    )
}