import TaskListItem from "./TaskListItem";

function TasksList({ onDelete, tasks = [], onEdit }) {
  return (
    <ul class="list-group">
      {tasks.map((task, i) => (
        <TaskListItem
          task={task}
          onEdit={(newVal) => onEdit?.(newVal, i)}
          onDelete={() => onDelete?.(i, task)}
        />
      ))}
    </ul>
  );
}

export default TasksList;
