import { useState } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import TasksList from "./TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const onTaskAdded = (taskText) => {
    setTasks(tasks.concat([taskText]));
  };
  const onTaskDelete = (index, task) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const onTaskEdit = (newVal, index) => {
    const newTasks = [...tasks];
    newTasks[index] = newVal;
    setTasks(newTasks);
  };

  return (
    <div className="container mt-3">
      <TaskInput onTaskAdded={onTaskAdded} />
      <TasksList tasks={tasks} onEdit={onTaskEdit} onDelete={onTaskDelete} />
    </div>
  );
}

export default App;
