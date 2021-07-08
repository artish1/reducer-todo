import React from "react";
import "./Todo.scss";

const Todo = ({ title, completed, toggleCompleted, id }) => {
  return (
    <div
      onClick={() => toggleCompleted(id)}
      className={`todo${completed ? " completed" : ""}`}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Todo;
