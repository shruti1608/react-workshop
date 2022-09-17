import { useState } from "react";

function TaskInput({ onTaskAdded }) {
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
            +
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskInput;
