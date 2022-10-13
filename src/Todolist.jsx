import { BiSave } from "react-icons/bi";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { Todocontext } from "./Todocontex";

export default function Todolistitem({ isedit, setisedit }) {
  const [list, setlist] = useContext(Todocontext);

  // delete task
  function handledelete(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(setlist(list.filter((item) => item.id !== id)))
      .catch((e) => console.error(e));
  }

  // click on edit icon
  function updateitem(itm, id, isedit) {
    setisedit([...isedit, id]);
  }

  // update item
  function onupdatehandler(e, title, id) {
    // setlist(
    //   list.map((item) => {
    //     if (item.id === id) {
    //       item.title = e.target.value;
    //       //setstate(item)
    //       return item;
    //     }
    //     return item;
    //   }))
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then(() =>
        setlist((prevState) => {
          const newState = prevState.map((obj) => {
            if (obj.id === id) {
              obj.title = e.target.value
              console.log("input",obj.title)
              return { ...obj, title:obj.title};
            }
            return obj;
          });
          return newState;
        })
      );
  }

  //click on save icon
  function oncomplelehandler(id, itm) {
    // setisedit();

    const newisEdit = isedit.filter((item, o) => item !== id);
    setisedit(newisEdit);
  }

  return (
    <div>
      {console.log("list", list)}
      {list.map((itm) => (
        <div key={itm.id} className="listStyle">
          <div className="innerlistStyle">
            {isedit.includes(itm.id) ? (
              <div className="innerlistStyle">
                <input
                  defaultValue={itm.title}
                  // value={e.target.value}
                  style={{ width: 450 }}
                  onChange={(e) => onupdatehandler(e, itm.title, itm.id)}
                ></input>
                <BiSave
                  style={{ marginLeft: 10 }}
                  onClick={() => oncomplelehandler(itm.id, itm.title)}
                ></BiSave>
              </div>
            ) : (
              <span className="listtextStyle">{itm.title}</span>
            )}
            <div>
              <AiTwotoneEdit
                onClick={() => updateitem(itm.title, itm.id, isedit)}
                style={{ marginRight: "10" }}
              ></AiTwotoneEdit>
              <AiFillDelete onClick={() => handledelete(itm.id)}></AiFillDelete>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
