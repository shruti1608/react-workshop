import { useState } from "react";
import { FaPencilAlt, FaArrowUp, FaTrash } from "react-icons/fa";

function TaskListItem({
  task,
  onDelete,
  onMoveUpClicked,
  isFirst = false,
  onEdit,
}) {
  const [editMode, setEditMode] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState(task);

  return (
    <li class="list-group-item">
      <div class="row">
        <div className="col">
          {editMode ? (
            <input
              autoFocus
              value={taskInputValue}
              onChange={(e) => setTaskInputValue(e.target.value)}
              type="text"
              class="form-control"
              name="taskName"
              id="taskName"
              placeholder="Enter task name"
            />
          ) : (
            task
          )}
        </div>
        {editMode && (
          <div className="col col-auto">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                onEdit?.(taskInputValue);
                setEditMode(false);
              }}
            >
              Save
            </button>
          </div>
        )}
        <div className="col col-auto">
          <button
            type="button"
            class="btn btn-light"
            onClick={() => {
              setEditMode(!editMode);
              setTaskInputValue(task);
            }}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="col col-auto">
          <button
            title="Move Up"
            type="button"
            disabled={isFirst}
            class="btn btn-secondary"
            onClick={() => onMoveUpClicked()}
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="col col-auto">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => onDelete?.()}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
