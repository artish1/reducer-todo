import React, { useState } from "react";

const TodoForm = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleOnChange = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTodo">Todo: </label>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleOnChange}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
