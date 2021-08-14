import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    setTodos((todos) => [...todos, { id: Math.random(), task: task }]);
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
