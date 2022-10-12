export const addNewTask = (tasks, createdTodo) => [createdTodo, ...tasks];

export const deleteTask = (index, tasks) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  return newTasks;
};

export const editTask = (tasks, index, updatedTodo) => {
  const newTasks = [...tasks];
  newTasks[index] = updatedTodo;
  return newTasks;
};
