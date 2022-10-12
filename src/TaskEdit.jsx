import { useState } from "react";
import { HiX } from "react-icons/hi";
import Button from "./Button";
import { patchTodo } from "./todoAxios";

function TaskEdit({ index, task, onEdit, toggle }) {
  const [taskInputValue, setTaskInputValue] = useState(task.task);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveTodo = async () => {
    try {
      setError(null);
      setLoading(true);
      const updatedTodo = await patchTodo(task.id, { task: taskInputValue });

      onEdit?.(updatedTodo, index);
      toggle();
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (error) {
    throw error;
  }

  return (
    <>
      <div className="col d-flex align-items-center">
        <input
          autoFocus
          disabled={loading}
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
        <Button
          type="button"
          className="btn-primary"
          loading={loading}
          onClick={saveTodo}
        >
          Save
        </Button>
      </div>
      <div className="col col-auto">
        <button
          type="button"
          disabled={loading}
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
