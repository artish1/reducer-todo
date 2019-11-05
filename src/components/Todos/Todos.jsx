import React from "react";
import Todo from "../Todo/Todo";
import "./Todos.scss";

const Todos = ({ todos }) => {
  return (
    <div className="centered">
      <div className="todos">
        {todos.map((todo, index) => {
          return <Todo key={index} title={todo.item} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
