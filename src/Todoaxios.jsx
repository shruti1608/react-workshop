import axios from "axios";

export const postcall = (state) => {
    const title = state;
     axios.post("http://localhost:3000/tasks", { title });
      
}