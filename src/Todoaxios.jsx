import axios from "axios";

export const postcall = (title) => {
    //const title = state;
     axios.post("http://localhost:3000/tasks", { title }).then(res => res.data);
      
}