import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random(), task: task, status: false },
    ]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completedTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completedTodo={completedTodo}
      />
    </div>
  );
};

export default App;
