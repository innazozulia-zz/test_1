import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        alert("Error!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
