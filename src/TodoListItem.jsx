import React from "react";

function TodoListItem({ children }) {
  return (
    <li className="list-group-item">
      <div className="row">{children}</div>
    </li>
  );
}

export default TodoListItem;
