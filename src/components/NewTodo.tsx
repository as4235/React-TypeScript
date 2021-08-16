import React, { useRef } from "react";

type NewTodoProps = {
	addTodo: (task: string) => void;
};

const NewTodo: React.FC <NewTodoProps> = ({addTodo}: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value; /* ! to denote it can be null too */
    addTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmit}>
      <div>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
