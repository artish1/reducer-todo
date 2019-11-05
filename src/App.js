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

  return (
    <div className="App">
      <TodoForm handleAdd={handleAdd} />
      <Todos todos={state} />
    </div>
  );
}

export default App;
