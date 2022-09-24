
 import { useState } from 'react';
 import Header from './header.jsx';
 import Counter from './counter.jsx';
 import { Usercontext , Countercontext} from './context.jsx';
 
 export default function App(props) {
 
 const [count,setcount] = useState(0)
 const [user] = useState('shruti')
   return(
  <Countercontext.Provider value={[count,setcount]}> 
   <Usercontext.Provider value={[user]}>
    <Header/>
    <Counter/>

   </Usercontext.Provider>

  </Countercontext.Provider>   


  )  
 }  
