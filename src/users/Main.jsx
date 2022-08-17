import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = React.useState([]);
  return (
    <div className="app">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
