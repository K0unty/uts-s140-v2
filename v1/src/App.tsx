import React, { useState } from "react";
import TodoList from "./componenets/TodoList";
import NewTodo from "./componenets/NewTodo";
import { Todo } from "./todo.model";

/* 
This function method below is the class method , but below it the 
const App -- Method , is the functional programming which is the newere style
*/
// function App() {
//   // const logoUrl = "https://i.ibb.co/7zgP572/image.png"; // Replace with the URL of the online image

//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddhandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDelHandler = (todo: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== todo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddhandler} />
      <TodoList items={todos} onDeleteTodo={todoDelHandler} />
    </div>
  );
};

export default App;
