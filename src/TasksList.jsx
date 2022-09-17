import TaskListItem from "./TaskListItem";

function TasksList({ onDelete, tasks = [], onEdit, onItemMoveUp }) {
  return (
    <ul class="list-group">
      {tasks.map((task, i) => (
        <TaskListItem
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
