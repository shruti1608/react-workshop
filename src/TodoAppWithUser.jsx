import Gravatar from 'react-gravatar';
import axios from 'axios';
import createResource from './createResorse';

const userResource = createResource(axios.get("http://localhost:3000/user").then((res) => res.data));
   
function TodoAppWithUser(){

   
    const currentUser = userResource.read();
  // console.log("currentuser",currentUser.name,currentUser.email)
    return(
        <div>
      <nav  style={{"background":'orange'}}>
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