import logo from './logo.svg';
//import './App.css';

function App(props) {
  
  const container={
    "display":"flex",
    "flexDirection":"column",
    "justifyContent":"center"
  }
  return (
    
    <div className="App" style={container}>
      <div style={{"height":300,"backgroundColor":"lightgreen","borderBottomLeftRadius":50,"borderBottomRightRadius":400,"marginRight":50,}}>
        <span style={{"color":"white","fontSize":150,"margin":50,"marginTop":40,"textShadow":"6px 6px lightgray"}}>W<span style={{"fontSize":100}}>elcome To Website</span></span>
      </div>
      <div style={{"height":150,"width":150,"background":"yellow","padding":100,"marginTop":-40,"alignSelf":"center","borderRadius":30,"justifyContent":"space-between","flexDirection":"column","display":'flex', "boxShadow": '4px 4px 4px lightgray'}}>
             
             <span style={{"textAlign":"center","color":"lightpink","fontWeight":"bold","marginTop":-60,"fontSize":20}}>Please Login!</span>
             <div style={{"alignSelf":"center","backgroundColor":"white","opacity":0.7,"flexDirection":"row","display":'flex',"width":250,"height":50,"boxShadow":"2px 2px 2px lightpink"}}>
               <span style={{"alignSelf":"center","color":"gray","opacity":0.5,"marginLeft":10,}}>{props.user}</span>
             </div>
             <div style={{"alignSelf":"center","backgroundColor":"white","opacity":0.7,"flexDirection":"row","display":'flex',"width":250,"height":50,"boxShadow":"2px 2px 2px lightpink"}}>
               <span style={{"alignSelf":"center","color":"gray","opacity":0.5,"marginLeft":10,}}>{props.password}</span>
             </div>
             <div style={{"marginBottom":-50,"height":50,"width":200,"backgroundColor":"lightpink","justifyContent":"center","alignSelf":"center","border":5,"borderRadius":10,"boxShadow":"3px 3px lightgray","flexDirection":"column","display":'flex'}}>
              <span style={{"textAlign":"center","fontWeight":"bold","color":"white"}}>Login</span>
             </div>
             
             
             
         </div>
     
     {/* <div style={{"display":"flex","backgroundColor":"lightblue","justifyContent":"center","flexDirection":"column"}}>
      <span style={{"textAlign":"center","padding":50}}>Hello</span>
      <div style={{"flexDirection":"row","display":"flex","justifyContent":"space-evenly","margin":30}}>
        <div style={{"height":100,"width":100,"backgroundColor":"navy","border":"solid","borderRadius":10,"justifyContent":"center","flexDirection":"column","display":"flex"}}>
          <span style={{"textAlign":"center"}}>{props.user}</span>
        </div>
        <div style={{"height":100,"width":100,"backgroundColor":"navy","border":"solid","borderRadius":10,"justifyContent":"center","flexDirection":"column","display":"flex"}}>
          <span style={{"textAlign":"center"}}>2</span>
        </div>
        <div style={{"height":100,"width":100,"backgroundColor":"navy","border":"solid","borderRadius":10,"justifyContent":"center","flexDirection":"column","display":"flex"}}>
          <span style={{"textAlign":"center"}}>3</span>
        </div>
      </div>  
      </div> */}
   

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>

  
  );
}

export default App;
