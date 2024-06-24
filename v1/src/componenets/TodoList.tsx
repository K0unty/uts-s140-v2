// 180: Buulding a todolist app

import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={props.onDeleteTodo.bind(null, todo.id)}
            className="btn"
          >
            <p>DELETE</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
