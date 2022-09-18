

export default function App(props) {
  const container={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }
  const heddingView={
    height:300,
    backgroundColor:"lightpink",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:400,
    marginRight:50
  }
  const heddingtextStyle={
    color:"white",
    fontSize:150,
    margin:50,
    marginTop:40,
    textShadow:"6px 6px lightgray"
  }
  const loginviewStyle={
    height:150,
    width:150,
    background:"yellow",
    padding:100,
    marginTop:-40,
    alignSelf:"center",
    borderRadius:30,
    justifyContent:"space-between",
    flexDirection:"column",
    display:'flex',
    boxShadow: '4px 4px 4px lightgray'
  }
  const logintitleStyle={
    textAlign:"center",
    color:"lightpink",
    fontWeight:"bold",
    marginTop:-60,
    fontSize:20
  }
  const inputviewStyle={
    alignSelf:"center",
    backgroundColor:"white",
    opacity:0.7,
    flexDirection:"row",
    display:'flex',
    width:250,
    height:50,
    boxShadow:"2px 2px 2px lightpink"
  }
  const inputtextStyle={
    alignSelf:"center",
    color:"gray",
    opacity:0.5,
    marginLeft:10
  }
  const loginbuttonStyle={
    marginBottom:-50,
    height:50,
    width:200,
    backgroundColor:"lightpink",
    justifyContent:"center",
    alignSelf:"center",
    border:5,
    borderRadius:10,
    boxShadow:"3px 3px lightgray",
    flexDirection:"column",
    display:'flex'
  }
  return (

<div className="App" style={container}>
       <div style={heddingView}>
        <span style={heddingtextStyle}>W<span style={props.style}>elcome To Website</span></span>
       </div>
       <div style={loginviewStyle}>
             
              <span style={logintitleStyle}>Please Login!</span>
              <div style={inputviewStyle}>
                <span style={inputtextStyle}>{props.user}</span>
              </div>
              <div style={inputviewStyle}>
                <span style={inputtextStyle}>{props.password}</span>
              </div>
              <div style={loginbuttonStyle}>
               <span style={{"textAlign":"center","fontWeight":"bold","color":"white"}}>Login</span>
              </div>
             
</div>
 </div>
  );
}  
  
