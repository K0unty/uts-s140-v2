// 181 : For adding new items to the ToDoList

import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text : </label>
        <input
          type="text"
          name="todo-text"
          ref={textInputRef}
          className="input-box"
        />
      </div>
      <button type="submit" className="btn">
        AddTodo
      </button>
    </form>
  );
};
export default NewTodo;
