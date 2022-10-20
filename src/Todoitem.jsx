import { useContext, useEffect, useState } from "react";
import { Todocontext } from "./Todocontex";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { postcall } from "./Todoaxios";

function Todoitem({ state, setstate }) {
  // const [, setlist] = useContext(Todocontext);
  const queryClient = useQueryClient();

  const { data: list } = useQuery(
    ["todos"],
    () => {
      return axios.get("http://localhost:3000/tasks").then((res) => res.data);
    },
    { useErrorBoundary: true }
  );

  const { mutate } = useMutation( (title) => {return axios.post("http://localhost:3000/tasks", { title })},{
    onSuccess: (data) => {
     // console.log(data);
      queryClient.setQueryData(["todos"],[...list,data.data]);
     setstate("");
    },
  });
  function onclickhandler() {
    mutate(state);
  }

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
    console.log("sort", sort, list);
    queryClient.setQueryData(["todos"], [...sort]);
    // setlist([...sort]);
    console.log("after sorting", list);
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
