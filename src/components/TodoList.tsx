import React from "react";

interface TodoListProps {
  todos: { id: number; task: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
};

export default TodoList;
