import React from "react";
import TodoList from "./componenets/TodoList";

// function App() {
//   // const logoUrl = "https://i.ibb.co/7zgP572/image.png"; // Replace with the URL of the online image

//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
