import Gravatar from 'react-gravatar';
import axios from 'axios';
//import createResource from './createResorse';
import { useQuery } from '@tanstack/react-query';

// const userResource = createResource(axios.get("http://localhost:3000/user").then((res) => res.data));
  
function TodoAppWithUser(){
  
    // const currentUser = userResource.read();
  // console.log("currentuser",currentUser.name,currentUser.email)
    
    const {data:currentUser,isLoading,isError,error} = useQuery(['user'],
    () => {return axios.get("http://localhost:3000/user").then((res) => res.data)},
    {
      suspense:true , 
    useErrorBoundary:true, 
    //cacheTime: 5000, // after 5 sec clear cache ,default time 5 min
    staleTime:3000  // after 3 sec query status fresh to stale , default time 0 sec
  })

    console.log(isLoading,isError,error)

    // if(isLoading){
    //  return <p>fetching...</p>
    // }
    // if(isError){
    //  return <p>{error.message}</p>
    // }

    return(
        <div>
      <nav style={{"background":'orange'}}>
        <div style={{'display':"flex" ,"flexDirection":"row-reverse","marginRight":100}}>
          <Gravatar
            style={{ width: "2rem", height: "2rem" }}
            title={currentUser.name}
            email={currentUser.email}
          />
        </div>
      </nav>
    
    </div>
    )
}

export default TodoAppWithUser;