import { useState } from "react";
import { FaSortAlphaDown, FaSortAlphaUp, FaPlus } from "react-icons/fa";
import Button from "./Button";
import { createTodo } from "./todoAxios";

function TaskInput({ onSortClick, sortDirection, onTaskAdded }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  const onAddBtnClick = async () => {
    setError(null);
    setLoading(true);
    try {
      const createdTodo = await createTodo(input);
      onTaskAdded?.(createdTodo);
      setInput("");
    } catch (err) {
      setError(err);
    }
    setLoading(false);
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
              disabled={loading}
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
          <Button
            onClick={onAddBtnClick}
            disabled={!Boolean(input)}
            type="button"
            className="btn btn-primary"
            loading={loading}
          >
            <FaPlus />
          </Button>
        </div>
        <div className="col col-auto">
          <button
            onClick={() => onSortClick?.()}
            title="sort ascending"
            type="button"
            className="btn btn-primary"
          >
            {sortDirection === "asc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskInput;
