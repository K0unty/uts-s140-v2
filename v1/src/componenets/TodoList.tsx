// 180: Buulding a todolist app

import React from "react";

const TodoList: React.FC = () => {
  const todos = [
    { id: "t1", text: "Todo 1" },
    { id: "t2", text: "Todo 2" },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
