import { v4 as uuid } from "uuid";

export const addNewTask = (tasks, taskText) => [
  { name: taskText, id: uuid() },
  ...tasks,
];

export const deleteTask = (index, tasks) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  return newTasks;
};

export const editTask = (tasks, index, newVal) => {
  const newTasks = [...tasks];
  newTasks[index] = {
    id: newTasks[index].id,
    name: newVal,
  };
  return newTasks;
};

export const moveUp = (tasks, index) => {
  const newTask = [...tasks];
  const upperItem = newTask[index - 1];
  newTask[index - 1] = newTask[index];
  newTask[index] = upperItem;

  return newTask;
};

export const sortTasks = (tasks) => {
  const newTasks = [...tasks];
  newTasks.sort((a, b) => a.name.localeCompare(b.name));
  return newTasks;
};
