import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function Todoitem({ state, setstate }) {
  const [, setlist] = useContext(Todocontext);
  const queryClient = useQueryClient();
  // const [isloding,setisloding] = useState(false)

  const data1 = [];

  const { data: list } = useQuery(
    ["todo-task"],
    () => {
      return axios.get("http://localhost:3000/tasks");
    },
    { useErrorBoundary: true }
  );

  // useEffect(() => {
  //   console.log("in use effect");
  //   axios.get("http://localhost:3000/tasks")
  //     //.then(res =>  console.log(res.data))
  //     .then(res => setlist(res.data), setisloding(true))
  //     .then( console.log('after useeff',list))
  //     .catch(e => console.error(e))
  // },[]);

  const onclickhandler = async () => {
    try {
      const title = state;
      const res = await axios.post("http://localhost:3000/tasks", { title });

      data1.push(res.data);
      // console.log(data1)
      queryClient.setQueryData(["todos"], { ...list, data1 }, setstate(""));
      //  setlist([...list,...data1]);
      //  setstate("")
    } catch (error) {
      console.error(error);
    }
  };

  function compare(a, b) {
    const A = a.title.toUpperCase();
    const B = b.title.toUpperCase();

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }

  function sortlistitem() {
    const sort = list.sort(compare);
    // queryClient.setQueryData(['todos'],sort(compare))
    setlist([...sort]);
  }

  

  return (
    <div>
      <input
        className="inputStyle"
        value={state}
        placeholder="Enter Task"
        onChange={(state) => setstate(state.target.value)}
      />
      <button className="buttonStyle" value={list} onClick={onclickhandler}>
        Add
      </button>
      <button className="buttonStyle" value={list} onClick={sortlistitem}>
        sort
      </button>
    </div>
  );
}

export default Todoitem;
