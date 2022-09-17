import { useState } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import TasksList from "./TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const onTaskAdded = (taskText) => {
    setTasks(tasks.concat([{ name: taskText }]));
    // const newTasks = [{ name: taskText }, ...tasks];
    // setTasks(newTasks);
  };
  const onTaskDelete = (index, task) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const onTaskEdit = (newVal, index) => {
    const newTasks = [...tasks];
    newTasks[index] = { name: newVal };
    setTasks(newTasks);
  };
  const onTaskMoveUp = (_task, index) => {
    if (index === 0) {
      return;
    }

    const newTask = [...tasks];
    const upperItem = newTask[index - 1];
    newTask[index - 1] = newTask[index];
    newTask[index] = upperItem;
    setTasks(newTask);
  };
  const onSort = () => {
    const newTasks = [...tasks];
    newTasks.sort((a, b) => a.name.localeCompare(b.name));
    setTasks(newTasks);
  };

  return (
    <div className="container mt-3">
      <TaskInput onSortClick={onSort} onTaskAdded={onTaskAdded} />
      <TasksList
        onItemMoveUp={onTaskMoveUp}
        tasks={tasks}
        onEdit={onTaskEdit}
        onDelete={onTaskDelete}
      />
    </div>
  );
}

export default App;
