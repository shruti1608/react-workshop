import { Suspense } from 'react';
import Todoapp from './Todoapp';
import TodoAppWithUser from './TodoAppWithUser';

export default function App(props) {
 
  return (

<div className='App'>
<Suspense fallback={<p>loding....</p>}> 
<TodoAppWithUser/>
</Suspense> 
<Todoapp/>
</div>
 
  );
}  
  
