import React, { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/todoReducer";

import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm />
      <Todos todos={state} />
    </div>
  );
}

export default App;
