import React from "react";
import "./Todo.scss";

const Todo = ({ title }) => {
  return (
    <div className="todo">
      <h2>{title}</h2>
    </div>
  );
};

export default Todo;
