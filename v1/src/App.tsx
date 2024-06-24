import React from "react";
import TodoList from "./componenets/TodoList";
import NewTodo from "./componenets/NewTodo";

/* 
This function method below is the class method , but below it the 
const App -- Method , is the functional programming which is the newere style
*/
// function App() {
//   // const logoUrl = "https://i.ibb.co/7zgP572/image.png"; // Replace with the URL of the online image

//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  const todos = [
    { id: "t1", text: "Todo 1" },
    { id: "t2", text: "Todo 2" },
  ];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
