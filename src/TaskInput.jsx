import { useState } from "react";
import { FaSortAlphaDown, FaPlus } from "react-icons/fa";

function TaskInput({ onSortClick, onTaskAdded }) {
  const [input, setInput] = useState("");

  const onAddBtnClick = () => {
    onTaskAdded?.(input);
    setInput("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddBtnClick();
      }}
    >
      <div className="row mb-3">
        <div className="col">
          <div className="form-group">
            <input
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="form-control"
              name="taskName"
              id="taskName"
              placeholder="Enter task name"
            />
          </div>
        </div>
        <div className="col col-auto">
          <button
            onClick={onAddBtnClick}
            disabled={!Boolean(input)}
            type="button"
            className="btn btn-primary"
          >
            <FaPlus />
          </button>
        </div>
        <div className="col col-auto">
          <button
            onClick={() => onSortClick?.()}
            title="sort ascending"
            type="button"
            className="btn btn-primary"
          >
            <FaSortAlphaDown />
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskInput;
