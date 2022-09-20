

//import Counter from './counter.jsx';
import { useState } from 'react';
import Header from './header.jsx';
import Body from './body.jsx';

export default function App(props) {

const [count,setcount] = useState(0)
  return (
    <div>
     <Header count={count} setcount={setcount} />
     <Body count={count} setcount={setcount}/>
    </div>

  );
}  
  
