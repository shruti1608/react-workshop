import { useState } from "react";
import { HiX } from "react-icons/hi";

function TaskEdit({ index, task, onEdit, toggle }) {
  const [taskInputValue, setTaskInputValue] = useState(task.name);
  return (
    <>
      <div className="col d-flex align-items-center">
        <input
          autoFocus
          value={taskInputValue}
          onChange={(e) => setTaskInputValue(e.target.value)}
          type="text"
          className="form-control"
          name="taskName"
          id="taskName"
          placeholder="Enter task name"
        />
      </div>
      <div className="col col-auto">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            onEdit?.(taskInputValue, index);
            toggle();
          }}
        >
          Save
        </button>
      </div>
      <div className="col col-auto">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            toggle();
          }}
        >
          <HiX />
        </button>
      </div>
    </>
  );
}

export default TaskEdit;
