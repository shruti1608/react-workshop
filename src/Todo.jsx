import { FaPencilAlt, FaArrowUp, FaTrash } from "react-icons/fa";

function Todo({
  task,
  onDelete,
  onMoveUpClicked,
  isFirst = false,
  onEditClick,
  index,
}) {
  return (
    <>
      <div className="col d-flex align-items-center">{task.name}</div>
      <div className="col col-auto">
        <button
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
        <button
          title="Move Up"
          type="button"
          disabled={isFirst}
          className="btn btn-secondary"
          onClick={() => onMoveUpClicked(index)}
        >
          <FaArrowUp />
        </button>
      </div>
      <div className="col col-auto">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete?.(index)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default Todo;
