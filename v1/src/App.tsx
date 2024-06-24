import React from "react";
import TodoList from "./componenets/TodoList";

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
      {/* Component that add todos */}
      <TodoList items={todos} />
    </div>
  );
};

export default App;
