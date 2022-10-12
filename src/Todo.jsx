import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Button from "./Button";
import { deleteTodo } from "./todoAxios";

function Todo({
  task,
  onDelete,
  onEditClick,
  index,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDeleteClick = async () => {
    setLoading(true);
    setError(null);
    try {
      await deleteTodo(task.id);
      onDelete?.(index);
    } catch (err) {
      setError(err);
    }
  };

  if (error) {
    throw error;
  }

  return (
    <>
      <div className="col d-flex align-items-center">{task.task}</div>
      <div className="col col-auto">
        <button
          disabled={loading}
          type="button"
          className="btn btn-light"
          onClick={() => {
            onEditClick();
          }}
        >
          <FaPencilAlt />
        </button>
      </div>
      <div className="col col-auto">
        <Button
          type="button"
          className="btn btn-danger"
          onClick={onDeleteClick}
          loading={loading}
        >
          <FaTrash />
        </Button>
      </div>
    </>
  );
}

export default Todo;
