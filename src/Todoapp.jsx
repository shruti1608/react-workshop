import { useState } from "react";

export default function Todoapp(){
const [state,setstate] =useState('')
const [list,setlist] = useState([])

function onclickhandler(){
    
    if(state != ''){
    setlist(curr => [...curr,state])
    setstate('') 
    } 
    
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
       
       
            {list.map(ele => <div style={listStyle}>
                             <span style={listtextStyle}>{ele}</span>
                             </div> )}
            
         </div>
        
    </div>
       
    )
}