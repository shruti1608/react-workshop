import { useState } from "react";
import "./App.css";
import TaskEdit from "./TaskEdit";
import TaskInput from "./TaskInput";
import Todo from "./Todo";
import TasksList from "./TasksList";
import Toggle from "./Toggle";
import TodoListItem from "./TodoListItem";
import { addNewTask, deleteTask, editTask, moveUp, sortTasks } from "./helpers";

function App() {
  const [tasks, setTasks] = useState([]);
  const onTaskAdded = (taskText) => {
    setTasks(addNewTask(tasks, taskText));
  };
  const onTaskDelete = (index) => {
    setTasks(deleteTask(index, tasks));
  };
  const onTaskEdit = (newVal, index) => {
    setTasks(editTask(tasks, index, newVal));
  };
  const onTaskMoveUp = (index) => {
    if (index === 0) {
      return;
    }

    setTasks(moveUp(tasks, index));
  };
  const onSort = () => {
    setTasks(sortTasks(tasks));
  };

  return (
    <div className="container mt-3">
      <TaskInput onSortClick={onSort} onTaskAdded={onTaskAdded} />
      <TasksList>
        {tasks.map((task, index) => (
          <TodoListItem key={task.id}>
            <Toggle
              render={(isOn, toggle) =>
                isOn ? (
                  <TaskEdit
                    task={task}
                    toggle={toggle}
                    index={index}
                    onEdit={onTaskEdit}
                  />
                ) : (
                  <Todo
                    task={task}
                    index={index}
                    onDelete={onTaskDelete}
                    isFirst={index === 0}
                    onMoveUpClicked={onTaskMoveUp}
                    onEditClick={toggle}
                  />
                )
              }
            />
          </TodoListItem>
        ))}
      </TasksList>
    </div>
  );
}

export default App;
