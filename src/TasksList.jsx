import TaskListItem from "./TaskListItem";

function TasksList({ onDelete, tasks = [], onEdit, onItemMoveUp }) {
  return (
    <ul className="list-group">
      {tasks.map((task, i) => (
        <TaskListItem
          key={task.id}
          task={task}
          isFirst={i === 0}
          onEdit={(newVal) => onEdit?.(newVal, i)}
          onDelete={() => onDelete?.(i, task)}
          onMoveUpClicked={() => onItemMoveUp(task, i)}
        />
      ))}
    </ul>
  );
}

export default TasksList;
