import React from "react";

interface TodoListProps {
  todos: { id: number; task: string; status: boolean }[];
  removeTodo: (id: number) => void;
  completedTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  completedTodo,
  removeTodo,
  todos,
}: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.status ? (
            <p style={{ textDecoration: "line-through" }}>{todo.task}</p>
          ) : (
            todo.task
          )}
          <p>
            <button onClick={() => removeTodo(todo.id)}>REMOVE</button>
            <button onClick={() => completedTodo(todo.id)}>
              {!todo.status ? "DONE" : "UNDO"}
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
