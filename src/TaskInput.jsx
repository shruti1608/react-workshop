import { useState } from "react";
import { FaSortAlphaUp, FaPlus } from "react-icons/fa";

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
      <div class="row mb-3">
        <div className="col">
          <div class="form-group">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              class="form-control"
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
            class="btn btn-primary"
          >
            <FaPlus />
          </button>
        </div>
        <div className="col col-auto">
          <button
            onClick={() => onSortClick?.()}
            title="sort ascending"
            type="button"
            class="btn btn-primary"
          >
            <FaSortAlphaUp />
            {/* <i class="fa-solid fa-arrow-up-z-a"></i> */}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskInput;
