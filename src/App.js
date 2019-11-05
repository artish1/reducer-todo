import React, { useReducer, useEffect } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/todoReducer";

import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "ADD_TODO", payload: "This is from dispatch" });
  }, []);

  const handleAdd = todo => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <TodoForm handleAdd={handleAdd} />
      <button onClick={handleClear}>Clear Completed</button>
      <Todos todos={state} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
